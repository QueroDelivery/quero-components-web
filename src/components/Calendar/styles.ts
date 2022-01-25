import styled from 'styled-components';
import { getFontSize, sizesTypes } from '../../helpers/FnUtil';
import { colors } from '../../styles/colors';

interface CalendarProps {
  brand?: boolean;
  size?: sizesTypes;
}

export const Container = styled.div<CalendarProps>`
  font-family: MontSerrat !important;
  display: flex;
  flex-direction: column;

  input {
    outline: none;
    padding: 7px 15px;
    border-radius: 20px;
    border: 1px solid
      ${props => (props.brand ? colors.brandLight : colors.gray10)};
    color: ${props => (props.brand ? colors.brand10 : colors.gray20)};
    cursor: pointer;
    font-weight: 500;
    background-color: ${props =>
      props.brand ? colors.brandLight : colors.white};
    font-size: ${props =>
      props.size ? getFontSize(props.size, '1rem') : '1rem'};

    &::placeholder {
      color: ${props =>
        props.brand ? colors.brandTransparent : colors.default10};
    }
  }

  span {
    font-size: ${props =>
      props.size ? getFontSize(props.size, '1rem') : '1rem'};
    color: ${colors.brand10};
    margin-left: 15px;
    margin-bottom: 3px;
  }

  .calendar-icon {
    position: relative;
    margin-left: -25px;
    font-size: ${props =>
      props.size ? getFontSize(props.size, '1rem') : '1rem'};
    color: ${props => (props.brand ? colors.brand10 : colors.gray20)};
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    margin-left: -8px !important;
    position: absolute !important;
  }
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    box-sizing: content-box !important;
    position: absolute !important;
    border: 8px solid transparent !important;
    height: 0 !important;
    width: 1px !important;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    content: '' !important;
    z-index: -1 !important;
    border-width: 8px !important;
    left: -8px !important;
    border-bottom-color: #291f1f !important;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle {
    top: 0 !important;
    margin-top: -8px !important;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    border-top: none !important;
    border-bottom-color: #ffffff !important;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    top: -1px !important;
    border-bottom-color: #aeaeae !important;
  }

  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    bottom: 0 !important;
    margin-bottom: -8px !important;
  }

  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    border-bottom: none !important;
    border-top-color: #fff !important;
  }

  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    bottom: -1px !important;
    border-top-color: #aeaeae !important;
  }

  .react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
  }

  .react-datepicker {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
    font-size: 0.8rem !important;
    background-color: #fff !important;
    color: #000 !important;
    border: 1px solid #aeaeae !important;
    border-radius: 20px !important;
    display: inline-block !important;
    position: relative !important;
  }

  .react-datepicker--time-only .react-datepicker__triangle {
    left: 35px !important;
  }

  .react-datepicker--time-only .react-datepicker__time-container {
    border-left: 0 !important;
  }

  .react-datepicker--time-only .react-datepicker__time,
  .react-datepicker--time-only .react-datepicker__time-box {
    border-bottom-left-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
  }

  .react-datepicker__triangle {
    position: absolute !important;
    left: 50px !important;
  }

  .react-datepicker-popper {
    z-index: 1 !important;
  }

  .react-datepicker-popper[data-placement^='bottom'] {
    margin-top: 10px !important;
  }

  .react-datepicker-popper[data-placement='bottom-end']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement='top-end']
    .react-datepicker__triangle {
    left: auto !important;
    right: 50px !important;
  }

  .react-datepicker-popper[data-placement^='top'] {
    margin-bottom: 10px !important;
  }

  .react-datepicker-popper[data-placement^='right'] {
    margin-left: 8px !important;
  }

  .react-datepicker-popper[data-placement^='right']
    .react-datepicker__triangle {
    left: auto !important;
    right: 42px !important;
  }

  .react-datepicker-popper[data-placement^='left'] {
    margin-right: 8px !important;
  }

  .react-datepicker-popper[data-placement^='left'] .react-datepicker__triangle {
    left: 42px !important;
    right: auto !important;
  }

  .react-datepicker__header {
    text-align: center !important;
    background-color: #ffffff !important;
    border-bottom: 1px solid #aeaeae !important;
    border-top-left-radius: 20px !important;
    padding-top: 18px !important;
    position: relative !important;
    padding-bottom: 10px !important;
  }

  .react-datepicker__header--time {
    padding-bottom: 8px !important;
    padding-left: 5px !important;
    padding-right: 5px !important;
  }

  .react-datepicker__header--time:not(.react-datepicker__header--time--only) {
    border-top-left-radius: 0 !important;
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 20px !important;
  }

  .react-datepicker__year-dropdown-container--select,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--scroll {
    display: inline-block !important;
    margin: 0 2px !important;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0 !important;
    color: #707070 !important;
    font-weight: bold !important;
    font-size: 0.944rem !important;
  }

  .react-datepicker-time__header {
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    overflow: hidden !important;
  }

  .react-datepicker__navigation {
    background: none !important;
    line-height: 1.7rem !important;
    text-align: center !important;
    cursor: pointer !important;
    position: absolute !important;
    top: 20px !important;
    width: 0 !important;
    padding: 0 !important;
    border: 0.5rem solid transparent !important;
    z-index: 1 !important;
    height: 15px !important;
    width: 20px !important;
    text-indent: -999em !important;
    overflow: hidden !important;
    outline: none !important;
  }

  .react-datepicker__navigation--previous {
    left: 10px !important;
    border-right-color: #9b4dee !important;
  }

  .react-datepicker__navigation--previous:hover {
    border-right-color: rgba(155, 77, 238, 0.2) !important;
  }

  .react-datepicker__navigation--previous--disabled,
  .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: rgba(155, 77, 238, 0.2) !important;
    cursor: default !important;
  }

  .react-datepicker__navigation--next {
    right: 10px !important;
    border-left-color: #9b4dee !important;
  }

  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 95px !important;
  }

  .react-datepicker__navigation--next:hover {
    border-left-color: rgba(155, 77, 238, 0.2) !important;
  }

  .react-datepicker__navigation--next--disabled,
  .react-datepicker__navigation--next--disabled:hover {
    border-left-color: rgba(155, 77, 238, 0.2) !important;
    cursor: default !important;
  }

  .react-datepicker__navigation--years {
    position: relative !important;
    top: 0 !important;
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .react-datepicker__navigation--years-previous {
    top: 4px !important;
    border-top-color: #ccc !important;
  }

  .react-datepicker__navigation--years-previous:hover {
    border-top-color: #b3b3b3 !important;
  }

  .react-datepicker__navigation--years-upcoming {
    top: -4px !important;
    border-bottom-color: #ccc !important;
  }

  .react-datepicker__navigation--years-upcoming:hover {
    border-bottom-color: #b3b3b3 !important;
  }

  .react-datepicker__month-container {
    float: left !important;
  }

  .react-datepicker__year {
    margin: 0.4rem !important;
    text-align: center !important;
  }

  .react-datepicker__year-wrapper {
    display: flex !important;
    flex-wrap: wrap !important;
    max-width: 180px !important;
  }

  .react-datepicker__year .react-datepicker__year-text {
    display: inline-block !important;
    width: 4rem !important;
    margin: 2px !important;
  }

  .react-datepicker__month {
    margin: 10px 0.4rem !important;
    text-align: center !important;
  }

  .react-datepicker__month .react-datepicker__month-text,
  .react-datepicker__month .react-datepicker__quarter-text {
    display: inline-block !important;
    width: 4rem !important;
    margin: 2px !important;
  }

  .react-datepicker__input-time-container {
    clear: both !important;
    width: 100% !important;
    float: left !important;
    margin: 5px 0 10px 15px !important;
    text-align: left !important;
  }

  .react-datepicker__input-time-container .react-datepicker-time__caption {
    display: inline-block !important;
    color: #707070 !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container {
    display: inline-block !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input {
    display: inline-block !important;
    margin-left: 10px !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input {
    width: 85px !important;
    border-radius: 20px !important;
    padding: 5px 10px !important;
    outline: none !important;
    border-style: solid !important;
    border-width: 1px !important;
    border-color: #707070 !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type='time']::-webkit-inner-spin-button,
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type='time']::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type='time'] {
    -moz-appearance: textfield !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__delimiter {
    margin-left: 5px !important;
    display: inline-block !important;
  }

  .react-datepicker__time-container {
    float: right !important;
    border-left: 1px solid #aeaeae !important;
    width: 85px !important;
  }

  .react-datepicker__time-container--with-today-button {
    display: inline !important;
    border: 1px solid #aeaeae !important;
    border-radius: 0.3rem !important;
    position: absolute !important;
    right: -72px !important;
    top: 0 !important;
  }

  .react-datepicker__time-container .react-datepicker__time {
    position: relative !important;
    background: white !important;
    border-bottom-right-radius: 20px !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
    width: 85px !important;
    overflow-x: hidden !important;
    margin: 0 auto !important;
    text-align: center !important;
    border-bottom-right-radius: 20px !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    list-style: none !important;
    margin: 0 !important;
    height: calc(195px + (1.7rem / 2)) !important;
    overflow-y: scroll !important;
    padding-right: 0px !important;
    padding-left: 0px !important;
    width: 100% !important;
    box-sizing: content-box !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    height: 30px !important;
    padding: 5px 10px !important;
    white-space: nowrap !important;
    color: #707070 !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
    cursor: pointer !important;
    background-color: #f0f0f0 !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: #9b4dee !important;
    color: white !important;
    font-weight: bold !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected:hover {
    background-color: #9b4dee !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled {
    color: #ccc !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled:hover {
    cursor: default !important;
    background-color: transparent !important;
  }

  .react-datepicker__week-number {
    color: #ccc !important;
    display: inline-block !important;
    width: 1.7rem !important;
    line-height: 1.7rem !important;
    text-align: center !important;
    margin: 0.166rem !important;
  }

  .react-datepicker__week-number.react-datepicker__week-number--clickable {
    cursor: pointer !important;
  }

  .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
    border-radius: 0.3rem !important;
    background-color: #f0f0f0 !important;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap !important;
    margin-top: 10px !important;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #707070 !important;
    display: inline-block !important;
    width: 1.7rem !important;
    line-height: 1.7rem !important;
    text-align: center !important;
    margin: 0.166rem !important;
    outline: none !important;
  }

  .react-datepicker__month--selected,
  .react-datepicker__month--in-selecting-range,
  .react-datepicker__month--in-range,
  .react-datepicker__quarter--selected,
  .react-datepicker__quarter--in-selecting-range,
  .react-datepicker__quarter--in-range {
    border-radius: 10px !important;
    background-color: #9b4dee !important;
    color: #fff !important;
  }

  .react-datepicker__month--selected:hover,
  .react-datepicker__month--in-selecting-range:hover,
  .react-datepicker__month--in-range:hover,
  .react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter--in-selecting-range:hover,
  .react-datepicker__quarter--in-range:hover {
    background-color: rgba(155, 77, 238, 0.8) !important;
  }

  .react-datepicker__month--disabled,
  .react-datepicker__quarter--disabled {
    color: #ccc !important;
    pointer-events: none !important;
  }

  .react-datepicker__month--disabled:hover,
  .react-datepicker__quarter--disabled:hover {
    cursor: default !important;
    background-color: transparent !important;
  }

  .react-datepicker__day,
  .react-datepicker__month-text,
  .react-datepicker__quarter-text,
  .react-datepicker__year-text {
    cursor: pointer !important;
  }

  .react-datepicker__day:hover {
    border-radius: 50% !important;
    background-color: #f0f0f0 !important;
  }
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    border-radius: 10px !important;
    background-color: #f0f0f0 !important;
  }

  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today,
  .react-datepicker__year-text--today {
    font-weight: bold !important;
  }

  .react-datepicker__day--highlighted,
  .react-datepicker__month-text--highlighted,
  .react-datepicker__quarter-text--highlighted,
  .react-datepicker__year-text--highlighted {
    border-radius: 0.3rem !important;
    background-color: #3dcc4a !important;
    color: #fff !important;
  }

  .react-datepicker__day--highlighted:hover,
  .react-datepicker__month-text--highlighted:hover,
  .react-datepicker__quarter-text--highlighted:hover,
  .react-datepicker__year-text--highlighted:hover {
    background-color: #32be3f !important;
  }

  .react-datepicker__day--highlighted-custom-1,
  .react-datepicker__month-text--highlighted-custom-1,
  .react-datepicker__quarter-text--highlighted-custom-1,
  .react-datepicker__year-text--highlighted-custom-1 {
    color: magenta !important;
  }

  .react-datepicker__day--highlighted-custom-2,
  .react-datepicker__month-text--highlighted-custom-2,
  .react-datepicker__quarter-text--highlighted-custom-2,
  .react-datepicker__year-text--highlighted-custom-2 {
    color: green !important;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    border-radius: 50% !important;
    background-color: #9b4dee !important;
    color: #fff !important;
    outline: none !important;
  }
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 10px !important;
    background-color: #9b4dee !important;
    color: #fff !important;
    outline: none !important;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--in-range:hover,
  .react-datepicker__year-text--selected:hover,
  .react-datepicker__year-text--in-selecting-range:hover,
  .react-datepicker__year-text--in-range:hover {
    background-color: rgba(155, 77, 238, 0.8) !important;
    outline: none !important;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50% !important;
    background-color: #9b4dee !important;
    color: #fff !important;
    outline: none !important;
  }
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    border-radius: 10px !important;
    background-color: #9b4dee !important;
    color: #fff !important;
    outline: none !important;
  }

  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover,
  .react-datepicker__quarter-text--keyboard-selected:hover,
  .react-datepicker__year-text--keyboard-selected:hover {
    background-color: rgba(155, 77, 238, 0.8) !important;
  }

  .react-datepicker__day--in-selecting-range,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__year-text--in-selecting-range {
    background-color: rgba(155, 77, 238, 0.5) !important;
    outline: none !important;
  }

  .react-datepicker__month--selecting-range .react-datepicker__day--in-range,
  .react-datepicker__month--selecting-range
    .react-datepicker__month-text--in-range,
  .react-datepicker__month--selecting-range
    .react-datepicker__quarter-text--in-range,
  .react-datepicker__month--selecting-range
    .react-datepicker__year-text--in-range {
    background-color: #f0f0f0 !important;
    color: #000 !important;
    outline: none !important;
  }

  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default !important;
    color: #ccc !important;
  }

  .react-datepicker__day--disabled:hover,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:hover,
  .react-datepicker__year-text--disabled:hover {
    background-color: transparent !important;
  }

  .react-datepicker__month-text.react-datepicker__month--selected:hover,
  .react-datepicker__month-text.react-datepicker__month--in-range:hover,
  .react-datepicker__month-text.react-datepicker__quarter--selected:hover,
  .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__month--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__month--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {
    background-color: #9b4dee !important;
  }

  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover {
    background-color: #f0f0f0 !important;
  }

  .react-datepicker__input-container {
    position: relative !important;
    display: inline-block !important;
    width: 100% !important;
  }

  .react-datepicker__year-read-view,
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view {
    border: 1px solid transparent !important;
    border-radius: 0.3rem !important;
  }

  .react-datepicker__year-read-view:hover,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__month-year-read-view:hover {
    cursor: pointer !important;
  }

  .react-datepicker__year-read-view:hover,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__year-read-view:hover,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover,
  .react-datepicker__month-read-view--down-arrow {
    border-top-color: #b3b3b3 !important;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    border-top-color: #ccc !important;
    float: right !important;
    margin-left: 20px !important;
    top: 5px !important;
    position: relative !important;
    border-width: 0.45rem !important;
  }

  .react-datepicker__year-dropdown,
  .react-datepicker__month-dropdown,
  .react-datepicker__month-year-dropdown {
    background-color: #f0f0f0 !important;
    position: absolute !important;
    width: 50% !important;
    left: 25% !important;
    top: 30px !important;
    z-index: 1 !important;
    text-align: center !important;
    border-radius: 0.3rem !important;
    border: 1px solid #aeaeae !important;
  }

  .react-datepicker__year-dropdown:hover,
  .react-datepicker__month-dropdown:hover,
  .react-datepicker__month-year-dropdown:hover {
    cursor: pointer !important;
  }

  .react-datepicker__year-dropdown--scrollable,
  .react-datepicker__month-dropdown--scrollable,
  .react-datepicker__month-year-dropdown--scrollable {
    height: 150px !important;
    overflow-y: scroll !important;
  }

  .react-datepicker__year-option,
  .react-datepicker__month-option,
  .react-datepicker__month-year-option {
    line-height: 20px !important;
    width: 100% !important;
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .react-datepicker__year-option:first-of-type,
  .react-datepicker__month-option:first-of-type,
  .react-datepicker__month-year-option:first-of-type {
    border-top-left-radius: 0.3rem !important;
    border-top-right-radius: 0.3rem !important;
  }

  .react-datepicker__year-option:last-of-type,
  .react-datepicker__month-option:last-of-type,
  .react-datepicker__month-year-option:last-of-type {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
    border-bottom-left-radius: 0.3rem !important;
    border-bottom-right-radius: 0.3rem !important;
  }

  .react-datepicker__year-option:hover,
  .react-datepicker__month-option:hover,
  .react-datepicker__month-year-option:hover {
    background-color: #ccc !important;
  }

  .react-datepicker__year-option:hover
    .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-option:hover
    .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-year-option:hover
    .react-datepicker__navigation--years-upcoming {
    border-bottom-color: #b3b3b3 !important;
  }

  .react-datepicker__year-option:hover
    .react-datepicker__navigation--years-previous,
  .react-datepicker__month-option:hover
    .react-datepicker__navigation--years-previous,
  .react-datepicker__month-year-option:hover
    .react-datepicker__navigation--years-previous {
    border-top-color: #b3b3b3 !important;
  }

  .react-datepicker__year-option--selected,
  .react-datepicker__month-option--selected,
  .react-datepicker__month-year-option--selected {
    position: absolute !important;
    left: 15px !important;
  }

  .react-datepicker__close-icon {
    cursor: pointer !important;
    background-color: transparent !important;
    border: 0 !important;
    outline: 0 !important;
    padding: 0px 6px 0px 0px !important;
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    height: 100% !important;
    display: table-cell !important;
    vertical-align: middle !important;
  }

  .react-datepicker__close-icon::after {
    cursor: pointer !important;
    background-color: #9b4dee !important;
    color: #fff !important;
    border-radius: 50% !important;
    height: 16px !important;
    width: 16px !important;
    padding: 2px !important;
    font-size: 12px !important;
    line-height: 1 !important;
    text-align: center !important;
    display: table-cell !important;
    vertical-align: middle !important;
    content: '×';
  }

  .react-datepicker__today-button {
    background: rgba(155, 77, 238, 0.1) !important;
    border-top: 1px solid #aeaeae !important;
    cursor: pointer !important;
    text-align: center !important;
    font-weight: bold !important;
    padding: 5px 0 !important;
    clear: left !important;
    border-bottom-left-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
  }

  .react-datepicker__portal {
    position: fixed !important;
    width: 100vw !important;
    height: 100vh !important;
    background-color: rgba(0, 0, 0, 0.8) !important;
    left: 0 !important;
    top: 0 !important;
    justify-content: center !important;
    align-items: center !important;
    display: flex !important;
    z-index: 2147483647 !important;
  }

  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 3rem !important;
    line-height: 3rem !important;
  }

  @media (max-width: 400px), (max-height: 550px) {
    .react-datepicker__portal .react-datepicker__day-name,
    .react-datepicker__portal .react-datepicker__day,
    .react-datepicker__portal .react-datepicker__time-name {
      width: 2rem !important;
      line-height: 2rem !important;
    }
  }

  .react-datepicker__portal .react-datepicker__current-month,
  .react-datepicker__portal .react-datepicker-time__header {
    font-size: 1.44rem !important;
  }

  .react-datepicker__portal .react-datepicker__navigation {
    border: 0.81rem solid transparent !important;
  }

  .react-datepicker__portal .react-datepicker__navigation--previous {
    border-right-color: #ccc !important;
  }

  .react-datepicker__portal .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3 !important;
  }

  .react-datepicker__portal .react-datepicker__navigation--previous--disabled,
  .react-datepicker__portal
    .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: #e6e6e6 !important;
    cursor: default !important;
  }

  .react-datepicker__portal .react-datepicker__navigation--next {
    border-left-color: #ccc !important;
  }

  .react-datepicker__portal .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3 !important;
  }

  .react-datepicker__portal .react-datepicker__navigation--next--disabled,
  .react-datepicker__portal
    .react-datepicker__navigation--next--disabled:hover {
    border-left-color: #e6e6e6 !important;
    cursor: default !important;
  }
`;
