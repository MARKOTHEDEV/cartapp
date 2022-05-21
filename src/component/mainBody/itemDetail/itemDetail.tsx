import Button from "../../Button/Button"
import ItemCounter from "../ItemCounter/ItemCounter"
import {
    SmallHeading,Content,
    PricingContainer,ActualPrice,
    PricePercent,CrossedPrice,ItemDetailContainer,ActualPriceAndPricePercent
} from "./itemDetail.style"

import {BsCart3 } from "react-icons/bs" 


const ItemDetail = () =>{



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
                        $125.00
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
            <div>

                <ItemCounter />
                <br />
                <Button 
                 icon={<BsCart3 />} 
                 label="Add to cart"
                 />
            </div>
        </ItemDetailContainer>
    )
}


export default ItemDetail