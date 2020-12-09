import React, { useState, useEffect } from 'react';

import { SelectBox, LabelError, Label } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/pro-solid-svg-icons';
import Loader from '../Loader/Loader';
import { removerAcentosESpecialChars } from '../../helpers/FnUtil';

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
    height?: number;
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
    height,
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
                height={height}
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
                                    className={`option ${index === selectedIndex && 'active-option'
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
                        <React.Fragment>
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
                                            options.filter(
                                                option =>
                                                    option.text
                                                        .toLowerCase()
                                                        .includes(
                                                            event.target.value.toLowerCase(),
                                                        ) ||
                                                    removerAcentosESpecialChars(
                                                        option.text,
                                                    )
                                                        .toLowerCase()
                                                        .includes(
                                                            event.target.value.toLowerCase(),
                                                        ),
                                            ),
                                        );
                                    } else {
                                        setOptionsState(options);
                                    }
                                }}
                                value={value ? item?.text : ''}
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
                        </React.Fragment>
                    ) : (
                            <React.Fragment>
                                <input
                                    value={item?.text || placeholder || ''}
                                    // defaultValue={placeholder ? placeholder : ''}
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
                            </React.Fragment>
                        )}
                </div>
            </SelectBox>
            {errorMessage && <LabelError>{errorMessage}</LabelError>}
        </div>
    );
};

export default Dropdown;
