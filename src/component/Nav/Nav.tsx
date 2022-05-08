import {AiOutlineShoppingCart } from "react-icons/ai"
import {NavContainer,
NavLogoContainer,NavLinks,UserImageContainer,UserPersonalNavInfoContainer,UserImage
} from "./Nav.style"
import userImageSrc from "../../asset/image-avatar.png" ;
import menuIcon from "../../asset/icon-menu.svg";
import menuIconClose from "../../asset/icon-close.svg";
import { useState } from "react";
const Nav = ()=>{
    const [hamburger,setHamburger]=useState(false)
    return (
        <NavContainer>
            <NavLogoContainer>
            <div onClick={(e)=>setHamburger(true)}>
                <img src={menuIcon} alt="menu bar" />
            </div>
                <h2>
                    sneakers
                </h2>
                
            </NavLogoContainer>

            <NavLinks hamburger={hamburger}>
                   <ul>
                    <div onClick={(e)=>setHamburger(false)}>
                        <img src={menuIconClose} alt="" />
                    </div>
                    <li><a href="">Collections</a></li>
                        <li><a href="">Men</a></li>
                        <li><a href="">Women</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                   </ul>
                
            </NavLinks>

            <UserPersonalNavInfoContainer>
                    {/* cart icon */}
                    <AiOutlineShoppingCart/>
                    {/* this the Container that holds the image */}
                    <UserImageContainer>
                        <UserImage src={userImageSrc}/>
                    </UserImageContainer>
            </UserPersonalNavInfoContainer>
        </NavContainer>
    )
}



export default Nav