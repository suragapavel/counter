import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type ButtonPropsType = DefaultButtonPropsType & {
    title: 'set' | 'inc' | 'reset'
}

export const Button:React.FC<ButtonPropsType> = (
    {
        title,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    return (
        <button className={s.button} {...restProps}> {title}
        </button>

    )
}