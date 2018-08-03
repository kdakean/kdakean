import React from 'react';
import Textarea from "react-textarea-autosize";

export const renderTextArea = ({
  input,
  label,
  readOnly,
  minRows,
  maxRows,
  show_err_msg,
  show_err_field,
  onKeyDown,
  meta: { touched, error }
}) => (
  <div className={show_err_field && touched && error && 'field-error has-danger'}>
    <Textarea {...input}
      placeholder={label}
      minRows={minRows}
      maxRows={maxRows}
      onKeyDown={onKeyDown}
      className="form-control"
      readOnly={readOnly} />
    {show_err_msg && touched && (error && <span className="message">{error}</span>)}
  </div>
)
