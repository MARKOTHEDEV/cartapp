import styled from "styled-components"



export const ItemDetailContainer = styled.div`
        padding: .7rem 1.2rem;


        h1{
            padding: .6rem 0;
        }

        @media screen  and (min-width:900px){
                width: 50%;
            }

            @media screen  and (min-width:1000px){
                width: 50%;
            }
`


export const SmallHeading = styled.h3`
color: ${({theme})=>theme.colors.primary.orange};
font-size: small;
padding: .5rem 0;
`




export const Content = styled.p`
color: ${({theme})=>theme.colors.neutral.darkGrayishBlue};
text-align: left;
line-height: 23px;
`



export const PricingContainer = styled.div`
/* border: 1px solid red; */

display: flex;
align-items: center;
justify-content: space-between;

`

export const ActualPriceAndPricePercent =styled.div`
    display: flex;
    align-items: center;
    /* border: 1px solid yellow; */
`
export const ActualPrice = styled.h2`

padding-right:.8rem;

`
export const PricePercent = styled.p`
background-color: ${({theme})=>theme.colors.primary.paleOrange};
padding:.1rem .5rem;
border-radius: 5px;
color: ${({theme})=>theme.colors.primary.orange};
font-weight: 700;
`
export const CrossedPrice = styled.p`
/* border: 1px solid blue; */
color: ${({theme})=>theme.colors.neutral.darkGrayishBlue};
font-weight: 500;

`
// export const SmallHeading = styled.h3``