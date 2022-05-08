
import styled from "styled-components"

import { NavLinkPropType } from "./NavTypes"


export const NavContainer = styled.nav`
/* border: 1px solid red; */
padding: .8rem 1.5rem;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${({theme})=>theme.colors.neutral.white};
`
export const NavLogoContainer = styled.div`
/* border: 1px solid red; */
width: 54%;
/* align-items: center; */
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
div{

    color: ${({theme})=>theme.colors.neutral.blackOpacity};
    /* border: 1px solid red; */
    width: 19.4833px;
    transform: translateY(4px);
    &:hover{
        cursor: pointer;
    }
    img{
        width: 100%;
        height: 100%;
    }
}
h2{
    /* border: 1px solid blue; */
    font-size: 2rem;
    color:  ${({theme})=>theme.colors.neutral.veryVarkBlue};
}
`
export const NavLinks = styled.div<NavLinkPropType>`
position: fixed;
/* border: 1px solid yellow; */
top: 0;
left: 0;
height: 100%;
width: 50%;
background-color: white;
padding: 1.5rem;
/* position: relative; */
${ (props)=>props.hamburger?"transform: translateX(0);":"transform: translateX(-100%);"}
transition: all .4s ease-in-out;

ul{
    /* border: 1px solid red; */

    height: 100%;

    div{
        margin-bottom:2rem;
        cursor: pointer;
    }
}
li{
    list-style-type: none;
    padding: .7rem 0;
}
a{
    color:  ${({theme})=>theme.colors.neutral.veryVarkBlue};
    text-decoration: none;
    font-weight: 700;
}
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
