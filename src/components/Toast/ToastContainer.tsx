import React from "react";

import { Container } from "./style";
import Toast from "./ToastComponent";

import { ToastMessage } from "../../hooks/Toast";

interface ToastProps {
    messages: ToastMessage[];
}

const ToastComponent: React.FC<ToastProps> = ({ messages }) => {
    return (
        <Container>
            {messages.map((message) => (
                <Toast key={message.id} toast={message} />
            ))}
        </Container>
    );
};

export default ToastComponent;
