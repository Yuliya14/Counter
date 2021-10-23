import React from "react";

export type ButtonPropsType = {
    name: string
    isDis?: boolean
    callbackFN: () => void
    error?: boolean
}
export const Button = (props: ButtonPropsType) => {
    return <div>
        <button className={props.isDis ? "button-disabled" : "double-border-button"}
                onClick={props.callbackFN}>{props.name}</button>
    </div>
}