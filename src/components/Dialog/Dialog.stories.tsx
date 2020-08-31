import React, { useState } from 'react';
import Dialog from './Dialog';
import ButtonMain from '../ButtonMain/ButtonMain';

export default {
    title: 'Dialog',
    component: Dialog,
};

export const Default = () => {
    const [open, setOpen] = useState(false);

    console.log(open);

    return (
        <div style={{ margin: 50 }}>
            <ButtonMain textFirst="abrir" onClick={() => setOpen(!open)} />
            <Dialog
                open={open}
                onClose={() => setOpen(!open)}
                body={
                    <div>
                        <div>
                            <strong>fsdfsdfsd</strong>{' '}
                        </div>
                        <div>
                            <strong>elements</strong>{' '}
                        </div>
                        <div>
                            <strong>elements</strong>{' '}
                        </div>
                        <div>
                            <strong>elements</strong>{' '}
                        </div>
                        <div>
                            <strong>elements</strong>{' '}
                        </div>
                        <div>
                            <strong>elements</strong>{' '}
                        </div>
                        <div>
                            <strong>elements</strong>{' '}
                        </div>
                        <div>
                            <strong>elements</strong>{' '}
                        </div>
                        <div>
                            <strong>elements</strong>{' '}
                        </div>
                    </div>
                }
            />
        </div>
    );
};
