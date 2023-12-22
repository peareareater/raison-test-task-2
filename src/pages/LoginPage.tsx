import { FormInput } from '../components/FormInput'
import { FormCheckbox } from '../components/FormCheckbox'
import { useEffect, useState } from 'react'
import { validateEmail } from '../utils/validateEmail'
import { useEmailCaching } from '../hooks/useEmailCaching'
import { ProceedButton } from '../components/ProceedButton'
import { RouteComponentProps } from 'react-router'

export function LoginPage(props: RouteComponentProps<{}>) {
    const [isAgreed, setAgreed] = useState(false)
    const [email, setEmail] = useState('')
    const [isProceed, setIsProceed] = useState(false)

    useEmailCaching(email, setEmail)

    const handleNavigate = () => {
        setIsProceed(true)
    }

    useEffect(() => {
        if (isProceed) {
            props.history.push('/login/step-2', {
                email,
            })
        }
    }, [isProceed])

    return (
        <>
            <FormInput value={email} setValue={setEmail} autoFocus />
            <div className="p-1"></div>
            <FormCheckbox value={isAgreed} setValue={setAgreed} />
            <ProceedButton navigate={handleNavigate} isDisabled={!isAgreed || !validateEmail(email)} />
        </>
    )
}
