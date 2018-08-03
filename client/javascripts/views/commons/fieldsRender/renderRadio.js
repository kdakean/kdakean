import React from 'react'

export const renderRadio = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <label className={ `radio-field ${touched && error && 'radio-error has-danger'}` }>
    <input {...input} type={type} />
    <span>{label}</span>
  </label>
)
