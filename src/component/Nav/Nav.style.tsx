
import styled from "styled-components"

import { NavLinkPropType } from "./NavTypes"


export const NavContainer = styled.nav`
/* border: 1px solid red; */
padding: .8rem 1.5rem;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${({theme})=>theme.colors.neutral.white};
position: relative;




@media screen and (min-width: 700px) {
padding: .8rem 0;
margin: 0 auto;
width: 70%;


    &::after{
    content: "";
    position: absolute;
    width: 100%;
    background-color: #80808045;
    height: 1px;
    left: 0;

    transform: translateY(50px);
    /* margin: 0 auto; */
}
}

`
export const NavLogoContainer = styled.div`
/* border: 1px solid red; */
width: 180px;
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
    @media screen and (min-width: 700px){
            display: none;
        
    }
}
h2{
    /* border: 1px solid blue; */
    font-size: 2rem;
    color:  ${({theme})=>theme.colors.neutral.veryVarkBlue};
}
@media screen  and (min-width:700px){
/* width: 1; */
/* border: 1px solid red; */
width: 180px;
max-width: 180px;
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
z-index: 40;
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


@media screen  and (min-width:700px){
    position: static;
    transform: none;
    /* border: 1px solid blue; */
    /* width: 100%; */
    /* width: 525.017px; */
width: 80%;
    padding: 0;

    ul{
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        /* border: 1px solid red; */
        div{
            display: none;
        }
    }
    a{
    font-weight: 100;
    color: gray;

    }
}

@media screen  and (min-width:844px){
    max-width: 395.15px;
}

`
export const NavLinkAndNavLogoContainer=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid yellow; */
    width: 100%;
    @media screen and (min-width:800px){
        max-width: 600px;
        /* border: 1px solid red; */
    }
`

export const UserPersonalNavInfoContainer = styled.div`
/* border: 1px solid blue; */
display: flex;
justify-content: space-between;
align-items: center;
width: 100px;


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

@media screen and (min-width: 700px) {
    width:50px;
height: 50px;
}
`
export const UserImage = styled.img`
width: 100%;
height: 100%;
`
