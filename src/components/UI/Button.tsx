import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
}

const Button: FC<ButtonProp> = ({text, className, type, onClick, disabled}) => {
    return (
        <button type={ type } className={`button ${className}`} onClick={onClick} disabled={disabled} >{ text }</button>
    )
}

export default Button;
