import styled from "styled-components"





export const CartCardNavContainer =styled.div`
        position: absolute;
        z-index: 14;
        background-color: white;
        left: 0;
        top: 140%;
        width: 90%;
        padding: 1.2rem 0;
        border-radius: 8px;
        /* margin: 0 auto; */
        transform: translateX(20px) ;
        max-width: 369px;
        max-height: 400px;
        overflow-y: scroll;
        @media screen and (min-width: 701px){
            right: 0;
            transform: translateX(0) ;
            left: unset;
        top: 100%;

            box-shadow: 2px 8px 66px -28px rgba(0,0,0,0.75);
        }
`

export const Header = styled.h4`
padding: .9rem .8rem;
`
export const Body = styled.div`
    padding: 1rem;
`
export const ItemContainer = styled.div`
`
export const Item = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 0;
color: #474242ee;


svg{
    cursor: pointer;
}
`
export const ItemImageContainer = styled.div`
    width: 20%;
img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
`
export const Content = styled.div`
width: 80%;
font-size: .9rem;
/* border: 1px solid red; */
padding-left:.6rem;

strong{
    color: black;
}
`
// export const Header = styled.div``