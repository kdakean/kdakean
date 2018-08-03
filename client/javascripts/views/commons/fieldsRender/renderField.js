import React from 'react'

export const renderField = ({
  input,
  label,
  type,
  readOnly,
  meta: { touched, error }
}) => (
  <div>
    <input {...input}
      placeholder={label}
      type={type}
      className={`form-control ${(touched && error) ? 'is-invalid' : ''}`}
      readOnly={readOnly} />
    {touched && (error && <span className="invalid-feedback">{error}</span>)}
  </div>
)
