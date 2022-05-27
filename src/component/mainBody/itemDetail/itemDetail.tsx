import Button from "../../Button/Button"
import ItemCounter from "../ItemCounter/ItemCounter"
import {
    SmallHeading,Content,
    PricingContainer,ActualPrice,
    PricePercent,CrossedPrice,ItemDetailContainer,ActualPriceAndPricePercent
} from "./itemDetail.style"

import {BsCart3 } from "react-icons/bs" 
import { useMediaQuery } from 'react-responsive'
import { useState,useContext } from "react"
import { AppContext } from "../../../Context/AppContext"

const ItemDetail = () =>{

    const NotMobile = useMediaQuery({
        query: '(min-width: 900px)'
      })
      const { cartState,userCartState } = useContext(AppContext)
      const {cart,setCart } = cartState
      const {userCartList,setUserCartList} = userCartState

      const handleAddTOCart = ()=>{
        setUserCartList([...userCartList,{
            "name":"wow",
            "price": (cart.actual_price*cart.qty_num).toFixed(2),
            "id":userCartList.length+3
        }])
      }
    return (
        <ItemDetailContainer>
            <SmallHeading>
                SNEAKER COMPANY
            </SmallHeading>

            <h1>Fall Limited Edition Sneakers</h1>

            <Content>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'ill withstand everything
                the weather can offer.
            </Content>
<br />
            <PricingContainer>
                <ActualPriceAndPricePercent>
                    <ActualPrice>
                        {/* $125.00 */}
                        {
                            (cart.actual_price*cart.qty_num).toFixed(2)
                        }
                    </ActualPrice>
                    <PricePercent>
                        <strong>50%</strong>
                    </PricePercent>
                </ActualPriceAndPricePercent>

                <CrossedPrice>
                    {/* this shoudld be a component */}
                    <s>
                    $250.00
                    </s>
                </CrossedPrice>
            </PricingContainer>
        <br />
        <br />
            <div style={{"display":NotMobile?"flex":"block","justifyContent":"space-between","alignItems":"center"}}>

                <ItemCounter
                width={NotMobile?"35%":"100%"}
                />
                <br />
                <Button 
                 icon={<BsCart3 />} 
                 label="Add to cart"
                 styles={{"width":NotMobile?"60%":"100%"}}
                 onClick={handleAddTOCart}
                //  isLoading={true}
                 />
            </div>
        </ItemDetailContainer>
    )
}


export default ItemDetail