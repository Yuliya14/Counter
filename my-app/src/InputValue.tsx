import React, {ChangeEvent} from "react";

export type InputValuePropsType = {
    title: string
    value: number
    callbackFN: (num: ChangeEvent<HTMLInputElement>) => void
}
export const InputValue = (props: InputValuePropsType) => {
    return <div>
        <input type = {"number"} placeholder={props.title} value={props.value} onChange={props.callbackFN}/>
    </div>
}