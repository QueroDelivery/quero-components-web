import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-solid-svg-icons";

import { ToastMessage, useToast } from "../../hooks/Toast";
import { Toast, Title, Body, Close } from "./style";

interface ToastProps {
    toast: ToastMessage;
}

const ToastComponent: React.FC<ToastProps> = ({ toast }) => {
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(toast.id);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [removeToast, toast.id]);

    return (
        <Toast
            type={toast.type}
            onClick={() => {
                if (!toast.closeIcon) {
                    removeToast(toast.id);
                }
            }}
        >
            <div>
                {toast.title && <Title>{toast.title}</Title>}
                <Body>{toast.text}</Body>
            </div>
            {toast.closeIcon && (
                <Close onClick={() => removeToast(toast.id)}>
                    <FontAwesomeIcon icon={faTimes} />
                </Close>
            )}
        </Toast>
    );
};

export default ToastComponent;
