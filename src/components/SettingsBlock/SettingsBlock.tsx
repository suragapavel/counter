import s from './SettingsBlock.module.css'
import {ChangeEvent} from "react";
import {Button} from "../Button/Button";

type PropsType = {
    addSett: () => void
    changeStartValue: (startValue: string) => void
    changeMaxValue: (maxValue: string) => void
    dis: boolean
    inputMaxDis: boolean
    inputStartDis: boolean
    startValue: string
    maxValue: string
}

export const SettingsBlock = ({ addSett, ...props }: PropsType) => {

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(e.currentTarget.value)
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(e.currentTarget.value)
    }
    const inputStartClass = props.inputStartDis ? s.redInputBlock : s.inputBlock
    const inputMaxClass = props.inputMaxDis ? s.redInputBlock : s.inputBlock

    const isSetDisable = !props.dis || props.inputMaxDis || props.inputStartDis

    return (
        <div className={s.settingsBlock}>
            <div className={s.maxMinValue}>
                max value
                <input
                    className={inputMaxClass}
                    onChange={onChangeMaxValue}
                    type={"number"}
                    value={props.maxValue}
                />
            </div>
            <div className={s.maxMinValue}>
                start value
                <input
                    className={inputStartClass}
                    onChange={onChangeStartValue}
                    type={"number"}
                    value={props.startValue}
                />
            </div>
            <div>
                <Button
                    disabled={isSetDisable}
                    onClick={addSett}
                    title={'set'}
                />
            </div>
        </div>
    )
}