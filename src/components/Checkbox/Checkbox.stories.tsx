import React, { useState } from 'react';
import CheckBox from './Checkbox';

export default {
    title: 'Checkbox',
    component: CheckBox,
};

export const Default = () => {
    const [value, setValue] = useState(true);

    return (
        <div style={{ margin: 50 }}>
            {/* <div>
                <CheckBox checked={value} />
                <div className="img-nome">Eitaaaa</div>
            </div>
            <br />
            <div>
                <CheckBox
                    checked={value}
                    onChange={() => setValue(!value)}
                    sizeBox="mini"
                    // label="text"
                />
                <div>eeeee</div>
            </div>
            <br />
            <br />
            <br /> */}
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="tiny"
                label="text"
            />
            <br />
            <br />
            <br />
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="small"
                label="text"
            />
            <br />
            <br />
            <br />
            <div>
                <CheckBox
                    checked={value}
                    onChange={() => setValue(!value)}
                    // sizeBox="medium"

                />
                <div>aaaa</div>
            </div>
            <br />
            <br />
            <br />
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="large"
                label="text"
            />
            <br />
            <br />
            <br />
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="big"
                label="text"
            />
            <br />
            <br />
            <br />
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="huge"
                label="text"
            />
            <br />
            <br />
            <br />
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="massive"
                label="text"
            />
        </div>
    );
};
