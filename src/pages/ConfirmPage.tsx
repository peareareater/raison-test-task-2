import { FormInput } from '../components/FormInput'
import { RouteComponentProps } from 'react-router'
import { LocationState } from '../types/common'
import { useEffect, useState } from 'react'
import { ErrorPopup } from '../components/ErrorPopup'
import { SuccessPopup } from '../components/SuccessPopup'

export function ConfirmPage(props: RouteComponentProps<{}, {}, LocationState>) {
    const { history } = props
    const { email } = history.location.state
    const [popup, setPopup] = useState<'Success' | 'Error'>()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if (popup !== undefined) {
            history.listen((_, action) => {
                if (action === 'POP') {
                    history.go(1)
                }
            })
        }
    }, [popup])

    const handleProceedClick = async () => {
        setLoading(true)
        const responce = fetch('/api/endpoint', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setPopup(res.ok ? 'Success' : 'Error')
                setLoading(false)
            })
    }

    return (
        <>
            {popup === 'Error' && <ErrorPopup />}
            {popup === 'Success' && <SuccessPopup />}
            <div className="flex flex-col justify-between h-full">
                <FormInput readonly value={email} />

                <div className="flex space-x-6 relative bottom-0">
                    <button
                        disabled={isLoading}
                        className="btn bg-gray-2 btn-neutral text-gray border-none w-40"
                        onClick={history.goBack}
                    >
                        Back
                    </button>
                    <button className="btn btn-primary w-[160px]" onClick={handleProceedClick}>
                        {isLoading && <span className="loading loading-spinner"></span>}
                        Confirm
                    </button>
                </div>
            </div>
        </>
    )
}
