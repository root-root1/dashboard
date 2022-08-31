import react, { FC, InputHTMLAttributes } from 'react';


interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
    label:string,
}

const Input: FC<InputProp> = ({ type = 'text', placeholder, value, name, onChange, label }) => {
    return (
        <div className="field">
            <div className="control">
                <label htmlFor={name}>{label}</label>
                <input
                    className='input'
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    id={name}
                    required
                />
            </div>
        </div>
    )
}

export default Input;
