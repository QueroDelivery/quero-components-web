import React, { useState } from "react";
import Modal from "./Modal";
import ButtonMain from "../ButtonMain/ButtonMain";

export default {
    title: "Modal",
    component: Modal,
};

export const Default = () => {
    const [open, setOpen] = useState(false);

    console.log(open);

    return (
        <div style={{ margin: 50 }}>
            <ButtonMain textFirst="abrir" onClick={() => setOpen(!open)} />
            <Modal
                open={open}
                title="pedidos detalhes"
                onClose={() => setOpen(!open)}
                closeOnDimerClick
                // actions={<ButtonMain textFirst="aceitar" height={40} width={40} />}
                body={
                    <div>
                        <div>
                            <strong>fsdfsdfsd</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        v v
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                        <div>
                            <strong>elements</strong>{" "}
                        </div>
                    </div>
                }
            />
        </div>
    );
};
