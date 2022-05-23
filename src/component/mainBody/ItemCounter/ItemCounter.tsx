import {TiMinus,TiPlus} from "react-icons/ti"
import {
    ItemCounterContainer,Number
}from "./ItemCounter.style"
import {ItemCounterContainerType} from "./ItemCounter.type"

const ItemCounter:React.FC<ItemCounterContainerType> = (props,...rest)=>{



    return (
       <ItemCounterContainer width={props.width}>

           <TiPlus />

           <Number>
               0
           </Number>

           <TiMinus />

       </ItemCounterContainer> 
    )
}

export default ItemCounter