import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {SetValueWindow} from "./SetValueWindow";
import {ResultWindow} from "./ResultWindow";

function App() {

    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    const [value, setValue] = useState(minValue)
    const [error, setError] = useState<string>("")

    return (
        <div className="App">
            <SetValueWindow
                value = {value}
                minValue = {minValue}
                maxValue = {maxValue}
                setMinValue = {setMinValue}
                setMaxValue = {setMaxValue}
                setValue = {setValue}
                error = {error}
                setError = {setError}
            />
            <ResultWindow value = {value}
                          minValue = {minValue}
                          maxValue = {maxValue}
                          setValue = {setValue}
                          error = {error}
                          setError = {setError}/>
        </div>
    );
}

export default App;
