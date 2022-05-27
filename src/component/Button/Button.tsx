import React from 'react';
import {ButtonStyle} from "./button.style"


export interface ButtonStyleType{
    width?:string;
    isLoading?:boolean;
}

export interface ButtonType{
    icon?:React.ReactElement;
    label:string;
    styles?:ButtonStyleType;
    isLoading?:boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button:React.FC<ButtonType> =({label="Click me",isLoading=false,icon,styles,...rest})=>{


  return (
    <ButtonStyle isLoading={isLoading} {...styles} {...rest}>
{isLoading?
"Loading...":<>
{icon} {label}
</>
}
      
      

    </ButtonStyle>
  )
}

export default Button