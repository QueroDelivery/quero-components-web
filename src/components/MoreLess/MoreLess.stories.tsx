import React, { useState } from 'react';
import MoreLess from './MoreLess';

export default {
    title: 'MoreLess',
    component: MoreLess,
};

export const Default = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <div>
                <MoreLess
                    value={value}
                    more={() => setValue(value + 1)}
                    less={() => setValue(value - 1)}
                    onChange={value => setValue(value)}
                    size="small"
                />
                <br />
                <br />
                <br />
                <MoreLess
                    value={value}
                    more={() => setValue(value + 1)}
                    less={() => setValue(value - 1)}
                    size="medium"
                />
                <br />
                <br />
                <br />
                <MoreLess
                    value={value}
                    more={() => setValue(value + 1)}
                    less={() => setValue(value - 1)}
                    onChange={value =>
                        value >= 20 ? setValue(20) : setValue(value)
                    }
                    limit={20}
                    size="big"
                />
            </div>
        </>
    );
};
