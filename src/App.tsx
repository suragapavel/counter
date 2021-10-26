import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/CounterBlock/Counter";
import {SettingsBlock} from "./components/SettingsBlock/SettingsBlock";


const api = {
    getStartValue() {
        return localStorage.getItem('startValue')
    },
    getMaxValue() {
        return localStorage.getItem('maxValue')
    },
    getCurrentValue() {
        return localStorage.getItem('currValue')
    },
    setStartValue(startValue: any) {
        return localStorage.setItem('startValue', startValue)
    },
    setMaxValue(maxValue: string) {
        return localStorage.setItem('maxValue', maxValue)
    },
    setCurrentValue(currValue: string) {
        return localStorage.setItem('currValue', currValue)
    },
    getInitialValues() {
        return {
            startV: this.getStartValue(),
            maxV: this.getMaxValue(),
            currV: this.getCurrentValue(),
        }
    }
}


function App() {
    const [startValue, setStartValue] = useState<string>('0')
    const [maxValue, setMaxValue] = useState<string>('0')
    const [currentValue, setCurrentValue] = useState<string>('0')
    const [dis, setDis] = useState<boolean>(true)
    const [inputMaxDis, setInputMaxDis] = useState<boolean>(false)
    const [inputStartDis, setInputStartDis] = useState<boolean>(false)

    useEffect(() => {
        if (api.getInitialValues().startV || api.getInitialValues().maxV || api.getInitialValues().currV) {
            api.getInitialValues().startV && setStartValue(api.getInitialValues().startV!)
            api.getInitialValues().maxV && setMaxValue(api.getInitialValues().maxV!)
            api.getInitialValues().currV && setCurrentValue(api.getInitialValues().currV!)
        }

    }, [])
    useEffect(() => {
        api.setCurrentValue(currentValue)
        setDis(false)
    }, [currentValue])

    const changeStartValue = (newValue: string) => {
        setStartValue(newValue)
        if (parseInt(newValue) >= 0 || parseInt(maxValue) >= 0) {
            setDis(true)
            setInputStartDis(false)
            setInputMaxDis(false)
        }
        if (parseInt(newValue) < 0) {
            setInputStartDis(true)
        }
        if (parseInt(newValue) >= parseInt(maxValue)) {
            setInputMaxDis(true)
            setInputStartDis(true)
        }
    }
    const changeMaxValue = (newValue: string) => {
        setMaxValue(newValue)
        if (parseInt(newValue) >= 0 || parseInt(startValue) >= 0) {
            setDis(true)
            setInputMaxDis(false)
            setInputStartDis(false)
        }
        if (parseInt(newValue) < 0) {
            setInputMaxDis(true)
        }
        if (parseInt(newValue) <= parseInt(startValue)) {
            setInputMaxDis(true)
            setInputStartDis(true)
        }
    }

    const addSett = () => {
        if (parseInt(startValue) < parseInt(maxValue) && parseInt(startValue) >= 0 && parseInt(maxValue) >= 0) {
            setDis(false)
            api.setMaxValue(maxValue)
            api.setStartValue(startValue)
            resetValue()
        }
    }

    const changeValue = () => {
        let val = parseInt(currentValue) + 1
        setCurrentValue(val.toString())
    }
    const resetValue = () => {
        setCurrentValue(startValue)
    }

    return (
        <div className={'App'}>
            <SettingsBlock
                inputMaxDis={inputMaxDis}
                inputStartDis={inputStartDis}
                dis={dis}
                addSett={addSett}
                changeStartValue={changeStartValue}
                changeMaxValue={changeMaxValue}
                startValue={startValue}
                maxValue={maxValue}
            />
            <Counter
                inputMaxDis={inputMaxDis}
                inputStartDis={inputStartDis}
                dis={dis}
                currentValue={currentValue}
                maxValue={maxValue}
                startValue={startValue}
                changeValue={changeValue}
                resetValue={resetValue}/>
        </div>
    );
}

export default App;
