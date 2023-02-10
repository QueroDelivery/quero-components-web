/// <reference types="react" />
import * as React from 'react';
import React__default, { ReactNode, Ref, ButtonHTMLAttributes, LinkHTMLAttributes, CSSProperties, InputHTMLAttributes, MouseEventHandler, TextareaHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ReactDatePickerProps } from 'react-datepicker';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { DropdownProps as DropdownProps$1, TableProps, TableBody, TableCell, TableFooter, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';

interface AccordionProps {
    className?: string;
    style?: React__default.CSSProperties;
    title: string;
    titleClassName?: string;
    titleStyle?: React__default.CSSProperties;
    subtitle?: string;
    subtitleClassName?: string;
    subtitleStyle?: React__default.CSSProperties;
    value?: string;
    valueClassName?: string;
    valueStyle?: React__default.CSSProperties;
    open: boolean;
    onClick: (event: React__default.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    secondary?: boolean;
    width?: number | string;
    icon?: IconDefinition;
    iconClassName?: string;
    iconStyle?: React__default.CSSProperties;
    customIcon?: React__default.ReactNode;
    bodyClassName?: string;
    bodyStyle?: React__default.CSSProperties;
    children?: ReactNode;
    ref?: Ref<HTMLDivElement>;
}
declare function Accordion({ className, style, title, titleClassName, titleStyle, subtitle, subtitleClassName, subtitleStyle, value, valueClassName, valueStyle, children, secondary, open, onClick, width, icon, iconClassName, iconStyle, customIcon, bodyClassName, bodyStyle, ref, }: AccordionProps): JSX.Element;

declare type sizesTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

declare type IconPositions = 'left' | 'right';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    textFirst?: string;
    textFirstClassName?: string;
    textFirstStyle?: React__default.CSSProperties;
    textEnd?: string;
    textEndClassName?: string;
    textEndStyle?: React__default.CSSProperties;
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    loading?: boolean;
    secondary?: boolean;
    notification?: boolean;
    amount?: number;
    backPurple?: boolean;
    width?: number | string;
    icon?: IconDefinition;
    iconClassName?: string;
    iconStyle?: React__default.CSSProperties;
    containerIconClassName?: string;
    containerIconStyle?: React__default.CSSProperties;
    customIcon?: React__default.ReactNode;
    iconPosition?: IconPositions;
    noBorder?: boolean;
    tertiary?: boolean;
    size?: sizesTypes;
    rectangular?: boolean;
}
declare function Button({ textFirst, textFirstClassName, textFirstStyle, textEnd, textEndClassName, textEndStyle, firstStrong, notStrong, strong, loading, secondary, backPurple, children, notification, amount, width, icon, iconClassName, iconStyle, containerIconClassName, containerIconStyle, customIcon, iconPosition, noBorder, tertiary, size, rectangular, ...rest }: ButtonProps): JSX.Element;

interface CalendarProps extends ReactDatePickerProps {
    label?: string;
    labelClassName?: string;
    labelStyle?: React__default.CSSProperties;
    brand?: boolean;
    otherFormatDate?: string;
    size?: sizesTypes;
}
declare const Calendar: React__default.FC<CalendarProps>;

declare type TTypes = 'shadow' | 'button' | 'min-shadow' | 'border' | 'none';
interface CardProps extends Pick<LinkHTMLAttributes<HTMLLinkElement>, 'href'> {
    type?: TTypes;
    width?: number | string;
    className?: string;
    style?: CSSProperties;
    icon?: IconDefinition;
    iconClassName?: string;
    iconStyle?: CSSProperties;
    iconSize?: SizeProp;
    onClick?(): void;
    loading?: boolean;
    complement?: ReactNode;
    complementStyle?: CSSProperties;
    complementClassName?: string;
    children?: ReactNode;
    childrenStyle?: CSSProperties;
    childrenClassName?: string;
}
declare function Card({ children, childrenStyle, childrenClassName, width, type, style, icon, iconClassName, iconStyle, iconSize, onClick, loading, className, complement, complementStyle, complementClassName, ...rest }: CardProps): JSX.Element;

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    labelClassName?: string;
    labelStyle?: CSSProperties;
    sizeBox?: sizesTypes;
    onChange?: () => void;
    containerClassName?: string;
    containerStyle?: CSSProperties;
}
declare const _default$3: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

interface DialogProps {
    open: boolean;
    onClose: Function;
    loading?: boolean;
    maxHeight?: number | string;
    title?: string;
    onBack?: Function;
    noBorder?: boolean;
    closeIcon?: boolean;
    children?: ReactNode;
    closeOnDimerClick?: boolean;
    onReturn?(): void;
}
declare function DialogComponent({ open, children, onClose, loading, maxHeight, title, noBorder, closeOnDimerClick, closeIcon, onReturn, }: DialogProps): JSX.Element;

interface OptionsProps {
    key: string | number;
    text: string;
    value: any;
}
interface DropdownProps extends DropdownProps$1 {
    options?: OptionsProps[];
    brand?: boolean;
    textAlign?: 'center';
    errorMessage?: string;
    label?: string;
    line?: boolean;
    containerClassName?: string;
    containerStyle?: CSSProperties;
    errorClassName?: string;
    errorStyle?: CSSProperties;
    labelClassName?: string;
    labelStyle?: CSSProperties;
}
declare function Dropdown({ options, brand, textAlign, errorMessage, label, line, containerClassName, containerStyle, errorClassName, errorStyle, labelClassName, labelStyle, noResultsMessage, ...rest }: DropdownProps): JSX.Element;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelClassName?: string;
    labelStyle?: CSSProperties;
    width?: string | number;
    textColor?: string;
    icon?: IconDefinition;
    iconClassName?: string;
    iconStyle?: CSSProperties;
    iconPosition?: 'left' | 'right';
    action?: {
        icon: IconDefinition;
        iconColor?: string;
        onClick: MouseEventHandler<HTMLButtonElement>;
        position?: 'left' | 'right';
        className?: string;
        style?: CSSProperties;
    };
    errorColor?: string;
    errorMessage?: string;
    errorClassName?: string;
    errorStyle?: CSSProperties;
}
declare const _default$2: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface LoaderProps {
    color?: string;
    outsideColor?: string;
    size?: sizesTypes;
    className?: string;
    style?: React__default.CSSProperties;
    position?: 'left' | 'center' | 'right';
}
declare function Loader({ color, size, className, style, position, outsideColor, }: LoaderProps): JSX.Element;

interface ModalProps {
    open: boolean;
    title?: string;
    actions?: React__default.ReactNode;
    width?: number | string;
    onClose: Function;
    closeOnDimerClick?: boolean;
    loading?: boolean;
    onReturnClick?(): void;
    size?: sizesTypes;
    noBorder?: boolean;
    closeIcon?: boolean;
    children?: ReactNode;
    className?: string;
    style?: React__default.CSSProperties;
    headerClassName?: string;
    headerStyle?: React__default.CSSProperties;
    bodyClassName?: string;
    bodyStyle?: React__default.CSSProperties;
}
declare function ModalComponent({ open, title, children, actions, width, onClose, closeOnDimerClick, loading, onReturnClick, size, noBorder, closeIcon, className, style, headerClassName, headerStyle, bodyClassName, bodyStyle, }: ModalProps): JSX.Element;

interface MoreLessProps {
    size?: sizesTypes;
    disabled?: boolean;
    value: number;
    maximum?: number;
    minimum?: number;
    quantityToChange?: number;
    onChange: (newValue: number) => void;
}
declare function MoreLess({ size, disabled, value, maximum, minimum, onChange, quantityToChange, }: MoreLessProps): JSX.Element;

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    labelStyle?: React__default.CSSProperties;
    labelClassName?: string;
    onChange: () => void;
    sizeBox?: sizesTypes;
}
declare const _default$1: React__default.ForwardRefExoticComponent<RadioProps & React__default.RefAttributes<HTMLInputElement>>;

declare type TSelectors = 'switch' | 'toggle' | 'activeInactive';
interface SelectionProps {
    type: TSelectors;
    checked?: boolean;
    onClick?: MouseEventHandler<HTMLElement>;
    onChange?: MouseEventHandler<HTMLElement>;
    size?: sizesTypes;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const Selection: React.ForwardRefExoticComponent<SelectionProps & React.RefAttributes<HTMLDivElement>>;

interface PaginationProps {
    totalCount: number;
    currentPage?: number;
    limitPerPage?: number;
    onPageChange?: (page: number) => void;
    doubleJumpArrow?: boolean;
    disabled?: boolean;
    size?: sizesTypes;
    className?: string;
    style?: React__default.CSSProperties;
}
declare function Pagination({ totalCount, currentPage, limitPerPage, onPageChange, doubleJumpArrow, disabled, size, className, style, }: PaginationProps): JSX.Element | null;

interface ITableComponent extends TableProps {
    title?: string | React__default.ReactNode;
    titleStyle?: React__default.CSSProperties;
    titleClassName?: string;
    message?: string;
    messageStyle?: React__default.CSSProperties;
    messageClassName?: string;
    hasMore?: () => void;
    hasMoreText?: string | ReactNode;
    pagination?: React__default.ReactElement;
    loading?: boolean;
}

interface TableComponentProps extends React__default.FunctionComponent<ITableComponent> {
    Body: typeof TableBody;
    Cell: typeof TableCell;
    Footer: typeof TableFooter;
    Header: typeof TableHeader;
    HeaderCell: typeof TableHeaderCell;
    Row: typeof TableRow;
}
declare const Table: TableComponentProps;

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    labelColor?: string;
    labelStyle?: React__default.CSSProperties;
    labelClassName?: string;
    errorClassName?: string;
    errorStyle?: React__default.CSSProperties;
    errorMessage?: string;
    errorColor?: string;
    textColor?: string;
    containerStyle?: React__default.CSSProperties;
    containerClassName?: string;
    lengthInfo?: boolean | number;
    lengthInfoClassName?: string;
    lengthInfoStyle?: React__default.CSSProperties;
    width?: number | string;
    height?: number | string;
}
declare const _default: React__default.ForwardRefExoticComponent<TextAreaProps & React__default.RefAttributes<HTMLTextAreaElement>>;

export { Accordion, AccordionProps, Button, Button as ButtonMain, ButtonProps, Calendar, CalendarProps, Card, CardProps, _default$3 as Checkbox, CheckboxProps, DialogComponent as Dialog, DialogProps, Dropdown, DropdownProps, _default$2 as Input, _default$2 as InputLine, InputProps, Loader, LoaderProps, ModalComponent as Modal, ModalProps, MoreLess, MoreLessProps, Pagination, PaginationProps, _default$1 as Radio, RadioProps, Selection, SelectionProps, Table, TableComponentProps, _default as TextArea, TextAreaProps };
