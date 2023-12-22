import { InputProps } from '../types/common'

export function FormCheckbox({ value, setValue }: InputProps<boolean>) {
    return (
        <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
                <input
                    onChange={() => setValue?.(!value)}
                    checked={value}
                    type="checkbox"
                    className="checkbox checkbox-primary"
                />
                <span className="label-text text-gray">I agree</span>
            </label>
        </div>
    )
}
