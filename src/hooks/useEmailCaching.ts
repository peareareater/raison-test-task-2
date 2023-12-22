import { useEffect, useMemo } from 'react'
import { validateEmail } from '../utils/validateEmail'

export const useEmailCaching = (email: string, setEmail: (email: string) => void) => {
    const resetCachedEmail = () => localStorage.setItem('lastValidEmail', '')

    useEffect(() => {
        if (!email) {
            return
        }
        if (validateEmail(email)) {
            localStorage.setItem('lastValidEmail', email)
        } else {
            resetCachedEmail()
        }
    }, [email])

    useEffect(() => {
        const cachedEmail = localStorage.getItem('lastValidEmail') || ''

        if (!cachedEmail || !validateEmail(cachedEmail)) {
            return
        }

        const navigationEntries = window.performance.getEntriesByType('navigation')
        const isPageReloaded = navigationEntries.length > 0 && navigationEntries[0].type === 'reload'

        if (isPageReloaded) {
            setEmail(cachedEmail)
        } else {
            resetCachedEmail()
        }
    }, [])
}
