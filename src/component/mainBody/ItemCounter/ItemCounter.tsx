import {TiMinus,TiPlus} from "react-icons/ti"
import {
    ItemCounterContainer,Number
}from "./ItemCounter.style"
import {ItemCounterContainerType} from "./ItemCounter.type"
import { useState,useContext } from "react"
import { AppContext } from "../../../Context/AppContext"
import {
    cartType,
    userCartType,
  } from "../../../App.type"
  
const ItemCounter:React.FC<ItemCounterContainerType> = (props,...rest)=>{

    const { cartState } = useContext(AppContext)
    const {cart,setCart } = cartState

    return (
       <ItemCounterContainer width={props.width}>

           <TiPlus   onClick={(e)=>{
            setCart({...cart,"qty_num":cart.qty_num+1})
     console.log("click")
     }} 
           />

           <Number>
               {cart.qty_num}
           </Number>

           <TiMinus
            onClick={(e)=>{
                if(cart.qty_num >=2){
                       setCart({...cart,"qty_num":cart.qty_num-1})
                }
            }} 
           />

       </ItemCounterContainer> 
    )
}

export default ItemCounter