import React, { createContext, useContext, useCallback, useState } from "react";
import ToastContainer from "../components/Toast/ToastContainer";
import { v4 as uuidV4 } from "uuid";

interface ToastContextData {
    addToast(message: Omit<ToastMessage, "id">): void;
    removeToast(id: string): void;
}

export interface ToastMessage {
    id: string;
    type?: "default" | "info" | "success" | "warning" | "error" | "light";
    title?: string;
    text: string;
    closeIcon?: boolean;
    autoClose?: number;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = useState<ToastMessage[]>([]);

    const addToast = useCallback(
        ({ type, title, text, closeIcon }: Omit<ToastMessage, "id">) => {
            const id: string = uuidV4();

            const toast = {
                id,
                type,
                title,
                text,
                closeIcon,
            };

            setMessages((state) => [...state, toast]);
        },
        []
    );

    const removeToast = useCallback((id: string) => {
        setMessages((state) => state.filter((message) => message.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    );
};

function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }

    return context;
}

export { ToastProvider, useToast };
