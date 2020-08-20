import React, { useState } from "react";
import ButtonMain from "./ButtonMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/pro-solid-svg-icons";

export default {
    title: "ButtonMain",
    component: ButtonMain,
};

function renderDefault() {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain textFirst="Testeee" strong />
        </div>
    );
}

function renderSecundary() {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain
                textFirst="Testeee"
                firstStrong
                icon={faBell}
                secundary
            />
        </div>
    );
}

function renderBackPurple() {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain
                textFirst="Testeee"
                textEnd="Teste2"
                notStrong
                backPurple
            />
        </div>
    );
}

function renderNotification() {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain
                textFirst="Testeee"
                textEnd="Teste2"
                notification
                amount="2"
            />
        </div>
    );
}

export const Default = () => renderDefault();
export const Secundary = () => renderSecundary();
export const BackPurple = () => renderBackPurple();
export const Notification = () => renderNotification();
