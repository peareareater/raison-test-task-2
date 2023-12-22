import { useEffect, useRef } from 'react'

type ProceedButtonProps = {
    isDisabled: boolean
    navigate: () => void
}

export const ProceedButton = (props: ProceedButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const timer = useRef<ReturnType<typeof setTimeout>>()

    function handleMouseDown() {
        clearTimeout(timer.current)

        timer.current = setTimeout(() => {
            props.navigate()
        }, 500)
    }

    function hanldeMouseUp() {
        clearTimeout(timer.current)
    }

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.addEventListener('touchstart', handleMouseDown)
            buttonRef.current.addEventListener('touchend', hanldeMouseUp)
            buttonRef.current.addEventListener('mousedown', handleMouseDown)
            buttonRef.current.addEventListener('mouseup', hanldeMouseUp)
        }

        return () => {
            buttonRef.current?.removeEventListener('touchstart', handleMouseDown)
            buttonRef.current?.removeEventListener('touchend', hanldeMouseUp)
            buttonRef.current?.removeEventListener('mousedown', handleMouseDown)
            buttonRef.current?.removeEventListener('mouseup', hanldeMouseUp)
        }
    }, [])

    return (
        <button ref={buttonRef} disabled={props.isDisabled} className="btn btn-primary mt-auto bg-purple text-black">
            Hold to proceed
        </button>
    )
}
