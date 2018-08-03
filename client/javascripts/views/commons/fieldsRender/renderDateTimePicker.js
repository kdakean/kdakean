import React from 'react'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'

import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment'
Moment.locale('en')
momentLocalizer()

class Picker extends DateTimePicker {
  constructor(props) {
    super(props);
    this.state = {
      open: (props.open ? props.open : false),
    };
  }

  _handleInputClick(callback, event) {
    if (event.target.tagName === 'INPUT') {
      this._open(true)
    }
    return callback && callback(event)
  }

  _handleToggle(callback, view) {
    this._open(!this.state.open, view)
    return callback && callback()
  }

  _open(shouldOpen) {
    const toggledState = shouldOpen ? 'date' : false
    this.setState({open: toggledState})
  }

  render() {
    return (
      <DateTimePicker
        {...this.props}
        onClick={this._handleInputClick.bind(this, this.props.onClick)}
        onToggle={this._handleToggle.bind(this, this.props.onToggle)}
        open={this.state.open} />
    )
  }
}

export const renderDateTimePicker = ({
  input: { onChange, value },
  showTime ,
  meta: { touched, error }
}) => (
  <div className={touched && error && 'field-error has-danger'}>
    <Picker
      onChange={onChange}
      format="DD MMM YYYY"
      time={showTime}
      value={!value ? null : new Date(value)} />
    {touched && (error && <span className="message">{error}</span>)}
  </div>
)
