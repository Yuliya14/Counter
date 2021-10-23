import React, {ChangeEvent, useEffect} from "react";
import {InputValue} from "./InputValue";
import {Button} from "./Button";
import {CounterValue} from "./CounterValue";

export type SetValueWindowPropsType = {
    error: string
    value: number
    minValue: number
    maxValue: number
    setError: (someError: string) => void
    setMinValue: (minValue: number) => void
    setMaxValue: (maxValue: number) => void
    setValue: (minValue: number) => void
}

export const SetValueWindow = (props: SetValueWindowPropsType) => {

    const setMinValueHandler = (min: ChangeEvent<HTMLInputElement>) => {
        props.setError("Please, click button 'set'")
        props.setMinValue(+min.currentTarget.value)
    }
    const setMaxValueHandler = (max: ChangeEvent<HTMLInputElement>) => {
        props.setError("Please, click button 'set'")
        props.setMaxValue(+max.currentTarget.value)
    }

    useEffect(() => {
        let currentMinValue = localStorage.getItem("minCurrentValue")
        if (currentMinValue) {
            props.setMinValue(JSON.parse(currentMinValue))
        }
        let currentMaxValue = localStorage.getItem("maxCurrentValue")
        if (currentMaxValue) {
            props.setMaxValue(JSON.parse(currentMaxValue))
        }
        let currentValue = localStorage.getItem("currentValue")
        if (currentValue) {
            if (currentMinValue != null) {
                props.setValue(JSON.parse(currentMinValue))
            }
        }
    }, [])
    const setCurrentValue = () => {
        props.setError('')
        if (props.minValue === props.maxValue) {
            props.setError("The MIN and MAX values must not be equal!")
        } else if (props.minValue > props.maxValue) {
            props.setError("The min value can't be greater than the max!")
        }
        props.setValue(props.minValue)
        localStorage.setItem("minCurrentValue", JSON.stringify(props.minValue))
        localStorage.setItem("maxCurrentValue", JSON.stringify(props.maxValue))
        localStorage.setItem("currentValue", JSON.stringify(props.minValue))
    }

    return <div className={"containerSetValueBlock"}>
        <CounterValue title={"Enter MIN value:"} value={props.minValue} callbackFN={setMinValueHandler}/>
        <CounterValue title={"Enter MAX value:"} value={props.maxValue} callbackFN={setMaxValueHandler} />
        <Button name={"set"} callbackFN={setCurrentValue}/>
    </div>
}

