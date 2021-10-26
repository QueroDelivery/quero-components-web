import 'semantic-ui-css/semantic.min.css';
import './default.scss';

import Accordion, { AccordionProps } from './components/Accordion/Accordion';
import ButtonMain, { ButtonProps } from './components/ButtonMain/ButtonMain';
import Calendar, { CalendarProps } from './components/Calendar/Calendar';
import Card from './components/Card/Card';
import Checkbox, { CheckboxProps } from './components/Checkbox/Checkbox';
import Dialog, { DialogProps } from './components/Dialog/Dialog';
import Dropdown, { DropdownProps } from './components/Dropdown/Dropdown';
import DropdownForm, {
  DropdownFormProps,
} from './components/Dropdown/DropdownForm';
import Input, { InputProps } from './components/Input/Input';
import InputForm, { InputFormProps } from './components/Input/InputForm';
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
  ButtonMain,
  Calendar,
  Card,
  Checkbox,
  Dialog,
  Dropdown,
  DropdownForm,
  Input,
  Input as InputLine,
  InputForm,
  InputForm as InputLineForm,
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
  CheckboxProps,
  DialogProps,
  DropdownProps,
  DropdownFormProps,
  InputProps,
  InputFormProps,
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
