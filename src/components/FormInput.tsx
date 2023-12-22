import { InputProps } from '../types/common'
import { validateEmail } from '../utils/validateEmail'
import cx from 'classnames'

export function FormInput({ value, setValue, readonly, autoFocus }: InputProps<string>) {
    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text text-gray">Email</span>
            </div>
            <input
                autoFocus={autoFocus}
                readOnly={readonly}
                value={value}
                onChange={(e) => setValue?.(e.target.value)}
                type="text"
                placeholder="Type here"
                className={cx('input text-gray bg-gray-1 border-none focus:outline-none', {
                    ['input-error']: value && !validateEmail(value),
                })}
            />
            {value && !validateEmail(value) && (
                <div className="label">
                    <span style={{ color: 'red' }} className="label-text-alt">
                        Email is incorrect
                    </span>
                </div>
            )}
        </label>
    )
}
