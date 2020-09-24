import React, { useState } from 'react';
import Selection from './Selection';

export default {
    title: 'Selection',
    component: Selection,
};

export const Switch = () => {
    const [checked, setChecked] = useState(false);
    return (
        <>
            <div>
                <Selection
                    type="switch"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="mini"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="switch"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="tiny"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="switch"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="small"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="switch"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="medium"
                    disabled
                />
                <br />
                <br />
                <br />
                <Selection
                    type="switch"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="large"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="switch"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="big"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="switch"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="huge"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="switch"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="massive"
                />
                <br />
                <br />
                <br />
            </div>
        </>
    );
};

export const Toogle = () => {
    const [checked, setChecked] = useState(true);
    return (
        <>
            <div>
                <Selection
                    type="toggle"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="mini"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="toggle"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="tiny"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="toggle"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="small"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="toggle"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="medium"
                    disabled
                />
                <br />
                <br />
                <br />
                <Selection
                    type="toggle"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="large"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="toggle"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="big"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="toggle"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="huge"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="toggle"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="massive"
                />
                <br />
                <br />
                <br />
            </div>
        </>
    );
};

export const ActiveInactive = () => {
    const [checked, setChecked] = useState(true);
    return (
        <>
            <div>
                <Selection
                    type="activeInactive"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="mini"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="activeInactive"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="tiny"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="activeInactive"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="small"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="activeInactive"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="medium"
                    disabled
                />
                <br />
                <br />
                <br />
                <Selection
                    type="activeInactive"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="large"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="activeInactive"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="big"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="activeInactive"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="huge"
                />
                <br />
                <br />
                <br />
                <Selection
                    type="activeInactive"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    size="massive"
                />
                <br />
                <br />
                <br />
            </div>
        </>
    );
};
