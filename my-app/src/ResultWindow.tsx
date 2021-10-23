import React, {useEffect} from "react";
import {Button} from "./Button";

export type ResultWindowPropsType = {
    error: string
    value: number
    minValue: number
    maxValue: number
    setError: (someError: string) => void
    setValue: (minValue: number) => void
}
export const ResultWindow = (props: ResultWindowPropsType) => {

    const increaseValue = () => {
        if (props.minValue === props.maxValue) {
            props.setError("The MIN and MAX values must not be equal!")
        } else if (props.minValue > props.maxValue) {
            props.setError("The min value can't be greater than the max!")
        }
        if(props.minValue >= props.maxValue) return
        else if (props.value < props.maxValue) { props.setValue(props.value + 1)}
       }
    const resetValue = () => props.setValue(props.minValue)

    return <div className={"containerResultBlock"}>
        {props.error ? <h3>{props.error}</h3> : <h3 className = {props.value === props.maxValue ? "value" : ""}>{props.value}</h3>}
        <div className={"containerResultButtonBlock"}>
            <Button name="inc" isDis = {props.value === props.maxValue} callbackFN={increaseValue}/>
            <Button name="res" isDis = {props.value === props.minValue} callbackFN={resetValue}/>
        </div>
    </div>
}