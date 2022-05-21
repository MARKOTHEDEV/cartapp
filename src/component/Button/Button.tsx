import React from 'react';
import {ButtonStyle} from "./button.style"
import {ButtonType} from "./ButtonTypes"
const Button:React.FC<ButtonType> =({label="Click me",isLoading=false,icon,styles,...rest})=>{


  return (
    <ButtonStyle isLoading={isLoading} {...styles} {...rest}>
{isLoading?
"Loading...":<>
<>{icon}</> {label}
</>
}
      
      

    </ButtonStyle>
  )
}

export default Button