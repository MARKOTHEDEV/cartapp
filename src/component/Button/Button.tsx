import React from 'react';
import {ButtonStyle} from "./button.style"
import {ButtonType} from "./ButtonTypes"



const Button:React.FC<ButtonType> =({label="Click me",styles,...rest})=>{


  return (
    <ButtonStyle  {...styles} {...rest}>
      {label}
    </ButtonStyle>
  )
}

export default Button