import React from 'react'
import { InputList } from './styles'
const FormInput = ({ placeholder, type, value, setValue }) => (

  <InputList
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={e => setValue(e.target.value)}
  />
)

export default FormInput