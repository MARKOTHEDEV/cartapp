import {
    CartCardNavContainer,Header,Body,Content,ItemContainer,Item,ItemImageContainer
} from "./CartCard.style"
import {RiDeleteBin5Line} from "react-icons/ri"
import Button from "../Button/Button"
import RandomImage from "../../asset/image-product-2-thumbnail.jpg";
import {useState,useContext }from "react"
import { AppContext } from "../../Context/AppContext";
const CartCardNav =()=>{
    const [isEmpty,setIsEmpty] = useState(true)
    const { userCartState } = useContext(AppContext) 
    const {userCartList,setUserCartList } = userCartState
 
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
                userCartList.length===0?<p style={{"textAlign":"center","padding":'2rem',"color":"gray"}}>
                    Your Cart is Empty
                </p>:<>
                  <ItemContainer>

                      {
                          userCartList.map((currentItem,index)=>(
                            <Item>

                            <ItemImageContainer>
                                 <img src={RandomImage} alt="" />
                             </ItemImageContainer>     
                             <Content>
                             <p>Fall Limited Edition Sneakers</p>
                             <p>$125.00 x3 <strong>${currentItem.price}</strong></p>
                             </Content>
                             
                             <RiDeleteBin5Line onClick={(e)=>{
// userCartList,setUserCartList

setUserCartList(userCartList.filter(data=>{

    return currentItem.id !== data.id
}))
                             }}/>
                             
                             </Item>
                          ))
                      }
             
                
            </ItemContainer>

            <Button label="Checkout" onClick={(e)=>setUserCartList([])}/>
                </>
            }
          
        </Body>


        </CartCardNavContainer>
    )
}

export default CartCardNav