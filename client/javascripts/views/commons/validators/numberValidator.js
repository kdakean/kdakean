export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
