import styled from "styled-components";



export const ItemCounterContainer = styled.div`


background-color:${({theme})=>theme.colors.neutral.lightGrayishBlue};
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 1rem;
border-radius: 10px;
svg{
color: ${({theme})=>theme.colors.primary.orange};
font-weight: 700;
font-size: 1.5rem;
}
`
export const Number = styled.div``
