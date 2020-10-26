import React, { useState, useEffect } from 'react';

import { SelectBox, LabelError, Label } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/pro-solid-svg-icons';
import Loader from '../Loader/Loader';

interface OptionsProps {
    text: string;
    id: string | number;
    value: any;
}

export interface DropdownProps {
    brand?: boolean;
    options: OptionsProps[];
    value: any;
    onChange: (value: any) => void;
    placeholder?: string;
    textAlign?: 'center';
    search?: boolean;
    loading?: boolean;
    width?: number;
    errorMessage?: string;
    label?: string;
    labelColor?: string;
    dropdownRef?: any;
}

const Dropdown: React.FC<DropdownProps> = ({
    brand,
    options,
    value,
    onChange,
    placeholder,
    textAlign,
    search,
    loading,
    width,
    errorMessage,
    label,
    labelColor,
    dropdownRef,
}) => {
    const [active, setActive] = useState(false);
    const [optionsState, setOptionsState] = useState<OptionsProps[]>();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [item, setItem] = useState<OptionsProps>();

    useEffect(() => {
        setOptionsState(options);
        setSelectedIndex(options.findIndex(option => option.value === value));
    }, []);

    useEffect(() => {
        if (optionsState) {
            setSelectedIndex(
                optionsState.findIndex(option => option.value === value),
            );
        }
        if (value) {
            setItem(options.filter(opt => opt.value === value)[0]);
        }
    }, [value]);

    // function handleKeyDown(event: React.KeyboardEvent) {
    //     if (!active) {
    //         setSelectedIndex(0);
    //         return;
    //     }

    //     const moves = {
    //         Up: 38,
    //         Down: 40,
    //         Enter: 13,
    //     };

    //     if (event.keyCode === moves.Up && selectedIndex > 0 && optionsState) {
    //         onChange(optionsState[selectedIndex - 1].value);
    //         const objDiv =
    //             optionsState &&
    //             document.getElementById(optionsState[selectedIndex - 1].text);
    //         if (objDiv) {
    //             objDiv.scrollIntoView(false);
    //         }
    //         return setSelectedIndex(selectedIndex - 1);
    //     }

    //     if (
    //         event.keyCode === moves.Down &&
    //         optionsState &&
    //         selectedIndex !== optionsState.length - 1
    //     ) {
    //         onChange(optionsState[selectedIndex + 1].value);
    //         const objDiv =
    //             optionsState &&
    //             document.getElementById(optionsState[selectedIndex + 1].text);
    //         if (objDiv) {
    //             objDiv.scrollIntoView(false);
    //         }
    //         return setSelectedIndex(selectedIndex + 1);
    //     }

    //     if (event.keyCode === moves.Enter && optionsState) {
    //         onChange(optionsState[selectedIndex].value);
    //         setActive(false);
    //     }
    // }

    return (
        <div style={{ marginBottom: errorMessage ? 5 : 25 }}>
            {label && (
                <Label errorMessage={errorMessage} labelColor={labelColor}>
                    {label}
                </Label>
            )}
            <SelectBox
                active={active}
                brand={brand}
                value={value}
                textAlign={textAlign}
                search={search}
                onBlur={() => setActive(false)}
                width={width}
                error={errorMessage}
                ref={dropdownRef}
            >
                <div className={`options-container ${active ? 'active' : ''}`}>
                    {optionsState && optionsState.length === 0 ? (
                        <div className="option no-value">
                            <input type="radio" />
                            <label>Nenhum resultado encontrado</label>
                        </div>
                    ) : (
                        optionsState &&
                        optionsState.map((option, index) => (
                            <div
                                key={option.id}
                                className={`option ${
                                    index === selectedIndex && 'active-option'
                                } `}
                                id={option.text}
                                onClick={() => {
                                    setItem(option);
                                    setActive(false);
                                    onChange(option.value);
                                }}
                            >
                                <input type="radio" />
                                <label>{option.text}</label>
                            </div>
                        ))
                    )}
                </div>

                <div
                    className="selected"
                    onClick={() => {
                        setActive(!active);
                        setOptionsState(options);
                    }}
                    id="selection"
                >
                    {search ? (
                        <>
                            <input
                                // onKeyPress={event => handleKeyDown(event)}
                                onChange={event => {
                                    setActive(true);
                                    if (onChange) {
                                        onChange(event.target.value);
                                    }
                                    if (event.target.value.trim().length > 0) {
                                        setOptionsState(
                                            optionsState &&
                                                options.filter(option =>
                                                    option.text.includes(
                                                        event.target.value,
                                                    ),
                                                ),
                                        );
                                    } else {
                                        setOptionsState(options);
                                    }
                                }}
                                value={value ? value : ''}
                                placeholder={placeholder}
                            />
                            <div className="icon">
                                {loading ? (
                                    <Loader size="mini" />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={active ? faAngleUp : faAngleDown}
                                        size="lg"
                                    />
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <input
                                defaultValue={
                                    value
                                        ? item?.text
                                        : placeholder
                                        ? placeholder
                                        : ''
                                }
                                readOnly
                            />
                            <div className="icon">
                                {loading ? (
                                    <Loader />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={active ? faAngleUp : faAngleDown}
                                        size="lg"
                                    />
                                )}
                            </div>
                        </>
                    )}
                </div>
            </SelectBox>
            {errorMessage && <LabelError>{errorMessage}</LabelError>}
        </div>
    );
};

export default Dropdown;
