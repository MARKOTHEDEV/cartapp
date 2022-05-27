import {TiMinus,TiPlus} from "react-icons/ti"
import {
    ItemCounterContainer,Number
}from "./ItemCounter.style"
import { useState,useContext } from "react"
import { AppContext } from "../../../Context/AppContext"
import {
    cartType,
    userCartType,
  } from "../../../App"
  



export interface ItemCounterContainerType{
width?:string;
}
const ItemCounter:React.FC<ItemCounterContainerType> = (props,...rest)=>{

    const { cartState } = useContext(AppContext)
    const {cart,setCart } = cartState


    const handleIncrement = ()=>setCart({...cart,"qty_num":cart.qty_num+1})
    const handleDecrement = ()=>{
        if(cart.qty_num >=2){
            setCart({...cart,"qty_num":cart.qty_num-1})
     }
    }

    return (
       <ItemCounterContainer width={props.width}>

           <TiPlus   onClick={handleIncrement}/>

           <Number>
               {cart.qty_num}
           </Number>

           <TiMinus onClick={handleDecrement}/>

       </ItemCounterContainer> 
    )
}

export default ItemCounter