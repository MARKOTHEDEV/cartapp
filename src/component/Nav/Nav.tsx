import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineShoppingCart } from "react-icons/ai"
import {NavContainer,
NavLogoContainer,NavLinks,UserImageContainer,UserPersonalNavInfoContainer,UserImage
} from "./Nav.style"
import userImageSrc from "../../asset/image-avatar.png" 
const Nav = ()=>{

    return (
        <NavContainer>
            <NavLogoContainer>
                <GiHamburgerMenu />
                <p></p>
                <h2>
                    sneakers
                </h2>
                
            </NavLogoContainer>

            <NavLinks>
                <ul>
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