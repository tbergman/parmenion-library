import React, { PropTypes } from 'react';
import { SingleDatePicker } from 'react-dates';
import styled, { css } from 'styled-components';
import moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';

const DatePickerWrapper = styled.div`
  ${({ theme, isOpen }) => css`
    .DateInput__display-text--focused {
      display: inline-block;
      background: ${theme.components.active_background};
      color: ${theme.type.text_color};
      border-color: ${theme.components.active_background};
    }

    .DateInput__display-text {
      margin: -4px -8px;
    }

    .CalendarMonth__day--hovered {
      background: ${theme.colors.gray_lightest};
      color: ${theme.type.text_color};
      border-color: ${theme.colors.gray_lightest};
    }

    .CalendarMonth__day--selected {
      background: ${theme.components.active_background};
      color: ${theme.type.text_color};
      border-color: ${theme.components.active_background};
    }

    .CalendarMonth__day {
      border-color: ${theme.colors.gray_lighter};
    }

    .CalendarMonth__day--selected:active {
      background: ${theme.components.active_background};
    }

    .transition-container--horizontal {
      transition: height 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    }

    .SingleDatePicker__picker {
      top: 60px;
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      transform: scaleY(0);
      opacity: 0;
      transform-origin: left top 0px;
    }

    .SingleDatePicker__picker--show {
      transform: scaleY(1);
      opacity: 1;
    }

    .DateInput--with-caret::before {
      content: none;
    }

    .SingleDatePickerInput {
      border: none;
    }

    .SingleDatePicker {
      display: block;
    }

    .DateInput {
      padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
      font-size: 1em;
      color: ${theme.forms.input_color};
      background-color: ${theme.forms.input_bg};
      border: 0.1rem solid ${theme.forms.input_border};
      border-radius: ${theme.forms.input_border_radius};
      box-shadow: ${theme.forms.input_inner_shadow};
      line-height: ${theme.type.line_height};
      display: block;
      width: 100%;
      background-image: none;
      transition: border-color cubic-bezier(0.23, 1, 0.32, 1) .15s, box-shadow cubic-bezier(0.23, 1, 0.32, 1) .15s;
      display: flex;
      align-items: center;

      &:focus {
        border-color: ${theme.forms.input_border_focus};
        outline: 0;
      }

      &[disabled] {
          background-color: ${theme.forms.input_bg_disabled};
          opacity: 1;
          cursor: ${theme.forms.cursor_disabled};
      }

      &[readonly] {
          cursor: pointer;
      }
    }
  `}
`;

export class DatePicker extends React.Component {

  static propTypes = {
    /** Number of months to display in the picker popup */
    numberOfMonths: PropTypes.number,

    value: PropTypes.date,
    onChange: PropTypes.object,
  }

  static defaultProps = {
    numberOfMonths: 1,
  }

  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      value: props.value != null ? moment(props.value) : null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value != null ? moment(nextProps.value) : null,
      });
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState({ focused });
  }

  onChange = (date) => {
    if (moment.isMoment(date)) {
      return this.props.onChange(date.toDate());
    }

    return this.props.onChange(null);
  }

  isOutsideRange = () => false

  render() {
    return (
      <DatePickerWrapper>
        <SingleDatePicker
          focused={this.state.focused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={this.props.numberOfMonths}
          date={this.state.value}
          onDateChange={this.onChange}
          isOutsideRange={this.isOutsideRange}
        />
      </DatePickerWrapper>
    );
  }

}
