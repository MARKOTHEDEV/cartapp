import {
    CartCardNavContainer,Header,Body,Content,ItemContainer,Item,ItemImageContainer
} from "./CartCard.style"
import {RiDeleteBin5Line} from "react-icons/ri"
import Button from "../Button/Button"
import RandomImage from "../../asset/image-product-2-thumbnail.jpg";
import {useState }from "react"


const CartCardNav =()=>{
    const [isEmpty,setIsEmpty] = useState(true)

    return (
        <CartCardNavContainer>
        <Header>
            Cart
        </Header>
        <hr  style={{"height":"1px",
        "backgroundColor":"#80808030","border":"transparent"
        }}/>

        <Body>

            {
                isEmpty?<p style={{"textAlign":"center","padding":'2rem',"color":"gray"}}>
                    Your Cart is Empty
                </p>:<>
                  <ItemContainer>
                <Item>

               <ItemImageContainer>
                    <img src={RandomImage} alt="" />
                </ItemImageContainer>     
                <Content>
                <p>Fall Limited Edition Sneakers</p>
                <p>$125.00 x3 <strong>$375.00</strong></p>
                </Content>
                <RiDeleteBin5Line/>
                
                
                </Item>
                
            </ItemContainer>

            <Button label="Checkout"/>
                </>
            }
          
        </Body>


        </CartCardNavContainer>
    )
}

export default CartCardNav