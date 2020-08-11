import React, { useState } from "react";
import ButtonMain from "./ButtonMain";

export default {
    title: "ButtonMain",
    component: ButtonMain,
};

function renderDefault() {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain
                textFirst='Testeee'
                textEnd='Teste2'
                strong
                disabled
                loading
            />
        </div>
    );
}

function renderSecundary() {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain
                textFirst='Testeee'
                textEnd='Teste2'
                firstStrong
                secundary
                disabled
            />
        </div>
    );
}

function renderBackPurple() {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain
                textFirst='Testeee'
                textEnd='Teste2'
                notStrong
                backPurple
            />
        </div>
    );
}

export const Default = () => renderDefault();
export const Secundary = () => renderSecundary();
export const BackPurple = () => renderBackPurple();
