export type InputProps<T> = {
    value: T
    setValue?: (value: T) => void
    readonly?: boolean
    autoFocus?: boolean
}

export type LocationState = { email: string }
