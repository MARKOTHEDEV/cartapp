
import styled from "styled-components"




export const NavContainer = styled.nav`
/* border: 1px solid red; */
padding: 1rem .6rem;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${({theme})=>theme.colors.neutral.white};
`
export const NavLogoContainer = styled.div`
/* border: 1px solid red; */
width: 52%;
/* align-items: center; */
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
svg{
    color: ${({theme})=>theme.colors.neutral.blackOpacity};
    font-size: 1.6rem;  
    position:absolute;
    top: 25%;
    left: 0;
    &:hover{
        cursor: pointer;
    }
}
h2{
    font-size: 2rem;
    color:  ${({theme})=>theme.colors.neutral.blackOpacity};
}
`
export const NavLinks = styled.div`
display: none;
`


export const UserPersonalNavInfoContainer = styled.div`
/* border: 1px solid blue; */
display: flex;
justify-content: space-between;
align-items: center;
width: 22%;

svg{
    display:block;
    font-size: 1.5rem;
    color: ${({theme})=>theme.colors.neutral.darkGrayishBlue};
}
`
export const UserImageContainer = styled.div`
/* border: 3px dotted  ${({theme})=>theme.colors.primary.orange};*/
width:30px;
height: 30px;
border-radius: 50%;
&:active{
    border: 1px solid  ${({theme})=>theme.colors.primary.orange};
}
`
export const UserImage = styled.img`
width: 100%;
height: 100%;
`
