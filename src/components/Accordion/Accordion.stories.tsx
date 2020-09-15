import React, { useState } from 'react';
import Accordion from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
};

export const Default = () => {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ margin: 50 }}>
            <Accordion
                open={open}
                onChange={() => setOpen(!open)}
                title="Lagarto - SE"
                subtitle="(1 vairro ativo para entrega)"
                body={<div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div><div>AAAAAA</div></div>}
            />
        </div>
    );
};

export const Secundary = () => {
    const [open, setOpen] = useState(true);

    return (
        <div style={{ margin: 50 }}>
            <Accordion
                open={open}
                onChange={() => setOpen(!open)}
                secundary
                title="Lagarto - SE"
                value="RS 17,96"
                body={<div>AAAAAA</div>}
            />
        </div>
    );
};
