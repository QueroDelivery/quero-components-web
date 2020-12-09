import React from 'react';

import { Switch, Toggle, ActiveInactive } from './styles';

interface SelectionProps {
    type: 'switch' | 'toggle' | 'activeInactive';
    checked?: boolean;
    onChange?: () => void;
    size?:
        | 'mini'
        | 'tiny'
        | 'small'
        | 'medium'
        | 'large'
        | 'big'
        | 'huge'
        | 'massive';
    disabled?: boolean;
    selectionRef?: any;
}

const TYPES = {
    switch: 'switch',
    toggle: 'toggle',
    activeInactive: 'activeInactive',
};

const Selection: React.FC<SelectionProps> = ({
    type,
    checked,
    onChange,
    size,
    disabled,
    selectionRef,
}) => {
    function renderSwitch() {
        return (
            <Switch size={size} ref={selectionRef} disabled={disabled}>
                <input type="checkbox" defaultChecked={checked} />
                <span
                    className="control"
                    onClick={() =>
                        !disabled ? (onChange ? onChange() : null) : null
                    }
                ></span>
            </Switch>
        );
    }
    function renderToggle() {
        return (
            <Toggle
                checked={checked}
                ref={selectionRef}
                size={size}
                disabled={disabled}
            >
                <div
                    className="btn left"
                    onClick={() =>
                        !disabled
                            ? checked
                                ? onChange
                                    ? onChange()
                                    : null
                                : null
                            : null
                    }
                >
                    <span>não</span>
                </div>
                <div
                    className="btn right"
                    onClick={() =>
                        !disabled
                            ? !checked
                                ? onChange
                                    ? onChange()
                                    : null
                                : null
                            : null
                    }
                >
                    <span>sim</span>
                </div>
            </Toggle>
        );
    }
    function renderActiveInactive() {
        return (
            <ActiveInactive
                checked={checked}
                ref={selectionRef}
                size={size}
                disabled={disabled}
            >
                <div
                    className="btn left"
                    onClick={() =>
                        !disabled
                            ? checked
                                ? onChange
                                    ? onChange()
                                    : null
                                : null
                            : null
                    }
                >
                    <span>{checked ? 'desativar' : 'inativo'}</span>
                </div>
                <div
                    className="btn right"
                    onClick={() =>
                        !disabled
                            ? !checked
                                ? onChange
                                    ? onChange()
                                    : null
                                : null
                            : null
                    }
                >
                    <span>{checked ? 'ativo' : 'ativar'}</span>
                </div>
            </ActiveInactive>
        );
    }

    switch (type) {
        case TYPES.switch:
            return renderSwitch();
        case TYPES.toggle:
            return renderToggle();
        case TYPES.activeInactive:
            return renderActiveInactive();
    }

    return <div />;
};

export default Selection;
