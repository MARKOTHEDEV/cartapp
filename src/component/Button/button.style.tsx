import styled from "styled-components";
import {ButtonStyleType} from "./ButtonTypes"




export const ButtonStyle = styled.button<ButtonStyleType>`

background-color: ${({theme})=>theme.colors.primary.orange};
opacity: ${(props)=>props.isLoading?".7":"1"};
border:transparent ;
display: block;
width: 100%;
border-radius: 10px;
padding: 1rem ;
font-size: 1rem;
font-weight: 600;
color: white;
cursor: pointer;
box-shadow: 1px 26px 20px -10px rgba(255,125,26,0.09);
-webkit-box-shadow: 1px 26px 20px -10px rgba(255,125,26,0.09);
-moz-box-shadow: 1px 26px 20px -10px rgba(255,125,26,0.09);



`