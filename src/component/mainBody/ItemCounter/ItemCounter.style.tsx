import styled from "styled-components";
import {ItemCounterContainerType} from "./ItemCounter.type"


export const ItemCounterContainer = styled.div<ItemCounterContainerType>`

width: 100%;
background-color:${({theme})=>theme.colors.neutral.lightGrayishBlue};
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 1rem;
border-radius: 10px;
${(props)=>props.width?"width:"+props.width+";":""}

svg{
color: ${({theme})=>theme.colors.primary.orange};
font-weight: 700;
font-size: 1.5rem;
}
`
export const Number = styled.div``
