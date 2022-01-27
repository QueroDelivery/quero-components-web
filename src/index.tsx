import 'semantic-ui-css/semantic.min.css';
import './default.scss';

import Accordion, { AccordionProps } from './components/Accordion/Accordion';
import Button, { ButtonProps } from './components/Button/Button';
import Calendar, { CalendarProps } from './components/Calendar/Calendar';
import Card, { CardProps } from './components/Card/Card';
import Checkbox, { CheckboxProps } from './components/Checkbox/Checkbox';
import Dialog, { DialogProps } from './components/Dialog/Dialog';
import Dropdown, { DropdownProps } from './components/Dropdown/Dropdown';
import Input, { InputProps } from './components/Input/Input';
import Loader, { LoaderProps } from './components/Loader/Loader';
import Modal, { ModalProps } from './components/Modal/Modal';
import MoreLess, { MoreLessProps } from './components/MoreLess/MoreLess';
import Radio, { RadioProps } from './components/Radio/Radio';
import Selection, { SelectionProps } from './components/Selection/Selection';
import Pagination, {
  PaginationProps,
} from './components/Pagination/Pagination';
import Table, { TableComponentProps } from './components/Table/Table';
import TextArea, { TextAreaProps } from './components/TextArea/TextArea';
import TextAreaForm, {
  TextAreaFormProps,
} from './components/TextArea/TextAreaForm';

export {
  Accordion,
  Button,
  Button as ButtonMain,
  Calendar,
  Card,
  Checkbox,
  Dialog,
  Dropdown,
  Input,
  Input as InputLine,
  Loader,
  Modal,
  MoreLess,
  Radio,
  Selection,
  Pagination,
  Table,
  TextArea,
  TextAreaForm,
};

export type {
  AccordionProps,
  ButtonProps,
  CalendarProps,
  CardProps,
  CheckboxProps,
  DialogProps,
  DropdownProps,
  InputProps,
  LoaderProps,
  ModalProps,
  MoreLessProps,
  PaginationProps,
  RadioProps,
  SelectionProps,
  TableComponentProps,
  TextAreaProps,
  TextAreaFormProps,
};
