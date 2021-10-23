import {InputValue} from "./InputValue";
import React, {ChangeEvent} from "react";

type CounterValuePropsType = {
    title: string
    value: number
    callbackFN: (value: ChangeEvent<HTMLInputElement>) => void
}
export const CounterValue = (props: CounterValuePropsType) => {
    return <div className={"containerSetBlock"}>{props.title}
        <InputValue title={props.title} value={props.value} callbackFN={props.callbackFN}/>
    </div>
}