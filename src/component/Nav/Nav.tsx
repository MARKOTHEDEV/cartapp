import {AiOutlineShoppingCart } from "react-icons/ai"
import {NavContainer,NavLinkAndNavLogoContainer,CartShoppingContainer,
NavLogoContainer,NavLinks,UserImageContainer,UserPersonalNavInfoContainer,UserImage
} from "./Nav.style"
import userImageSrc from "../../asset/image-avatar.png" ;
import menuIcon from "../../asset/icon-menu.svg";
import menuIconClose from "../../asset/icon-close.svg";
import { useState } from "react";
import CartCardNav from "../CartCard/CartCard";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";


export interface NavLinkPropType{

    hamburger:boolean;
}

export interface UserImageContainerType{

    isActive:boolean;
}


const Nav = ()=>{
    const [hamburger,setHamburger]=useState(false)
    const [showCartNav,setShowCartNav] = useState(false)

    const { userCartState } = useContext(AppContext) 

    return (
        <NavContainer>
            <NavLinkAndNavLogoContainer>

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
                                <li><a href="#">Collections</a></li>
                                    <li><a href="#">Men</a></li>
                                    <li><a href="#">Women</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                            </ul>
                            
                        </NavLinks>

            </NavLinkAndNavLogoContainer>


            <UserPersonalNavInfoContainer>
                    {/* cart icon */}
                    <CartShoppingContainer>
                    <AiOutlineShoppingCart     onClick={(e)=>setShowCartNav(!showCartNav)}/>
                        <p>{userCartState.userCartList.length}</p>
                    </CartShoppingContainer>
                    {/* this the Container that holds the image */}
                    <UserImageContainer 
                  
                    isActive={showCartNav}
                    >
                        <UserImage src={userImageSrc} />
                    </UserImageContainer>
            </UserPersonalNavInfoContainer>

           {/* this component show the current Cart State */}
           {
               showCartNav?
               <CartCardNav /> 
          :""
            }
            
        
        </NavContainer>
    )
}



export default Nav