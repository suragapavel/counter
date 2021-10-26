import s from './Counter.module.css'
import {Button} from "../Button/Button";

type ValueType = {
    resetValue: () => void
    changeValue: () => void
    maxValue: string
    startValue: string
    dis: boolean
    inputMaxDis: boolean
    inputStartDis: boolean
    currentValue: string
}

export const Counter = (props: ValueType) => {

    const counterClass = props.currentValue === props.maxValue ? s.redValue : s.counterValue
    const isError = (props.inputMaxDis || props.inputStartDis)

    return (
        <div className={s.asd}>
            <div className={s.сounterBlock}>
                {!props.dis
                    ? <div className={counterClass}>{props.currentValue}</div>
                    : isError
                        ? <div className={s.errRedMes}>Incorrect value!</div>
                        : <div className={s.errMes}>enter values and press 'set'</div>}
                <Button
                    onClick={props.changeValue}
                    disabled={props.currentValue === props.maxValue || props.dis}
                    title={'inc'}
                />
                <Button
                    onClick={props.resetValue}
                    disabled={props.currentValue === props.startValue || props.dis}
                    title={'reset'}
                />
            </div>
        </div>
    )
}
