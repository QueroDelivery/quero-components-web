import React, { useState } from "react";
import InputLine from "./InputLine";

export default {
    title: "InputLine",
    component: InputLine,
};

function renderDefault() {
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [error, setError] = useState("");

    return (
        <div style={{ margin: 50 }}>
            <InputLine
                label="Nome"
                placeholder="Insira seu nome"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />

            <InputLine
                label="Nome"
                placeholder="Insira seu nome"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                required
                errorColor='blue'
            />

            <InputLine
                label="Nome"
                placeholder="Insira seu nome"
                value={value3}
                onChange={(event) => setValue3(event.target.value)}
                required
                errorMessage={error}
            />

            <button onClick={() => {
                if(value3 !== 'alan'){
                    setError('Nome inválido')
                } else {
                    setError('')
                }
            }}>Enviar</button>
        </div>
    );
}

export const Default = () => renderDefault();
