import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
function TemperatureConverter() {
    const [tempCelsius, settempCelsius] = useState('');
    const [tempFahrenheit, settempFahrenheit] = useState('');
    const [IsCelsius, setIsCelsius] = useState(true);
    
    const calcTemperature = (event) => {
        if (IsCelsius) {
            settempFahrenheit((Number.parseFloat(tempCelsius) * 1.8 + 32).toFixed(2));
        } else {
            settempCelsius(((Number.parseFloat(tempFahrenheit) - 32) / 1.8).toFixed(2));
        } 
    };
    
    return (
        <>
            <h3>Введите температуру:</h3>
            <TextField
                label="Шкала Цельсия"
                variant="outlined"
                value={tempCelsius}
                onChange={(event) => {
                    settempCelsius(event.target.value);
                    setIsCelsius(true)
                }} />
            
            <TextField
                label="Шкала Фаренгейта"
                variant="outlined"
                value={tempFahrenheit}
                onChange={(event) => {
                    settempFahrenheit(event.target.value);
                    setIsCelsius(false)
                }} />
            <br/>
            <Button
                variant="contained"
                onClick={calcTemperature}>
                Конвертировать
            </Button>
        </>
    )
}

export default TemperatureConverter;