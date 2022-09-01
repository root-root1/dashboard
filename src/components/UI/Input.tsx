import react, { FC, InputHTMLAttributes } from 'react';


interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
    label:string,
}

const Input: FC<InputProp> = ({ type = 'text', placeholder, value, name, onChange, label }) => {
    return (
        <div className="field">
            <div className="control">
                <label htmlFor={name} className='mb-2'>{label}</label>
                <input
                    className='input mt-2 mb-2'
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    id={name}
                    autoComplete='off'
                    required
                />
            </div>
        </div>
    )
}

export default Input;
