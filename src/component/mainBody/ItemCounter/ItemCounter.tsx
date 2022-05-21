import {TiMinus,TiPlus} from "react-icons/ti"
import {
    ItemCounterContainer,Number
}from "./ItemCounter.style"
const ItemCounter = ()=>{



    return (
       <ItemCounterContainer>

           <TiPlus />

           <Number>
               0
           </Number>

           <TiMinus />

       </ItemCounterContainer> 
    )
}

export default ItemCounter