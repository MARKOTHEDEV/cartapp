import {TiMinus,TiPlus} from 'react-icons/ti'
import {
    ItemCounterContainer,Number
}from './ItemCounter.style'
import React, { useContext } from 'react'
import { AppContext } from '../../../Context/AppContext'



export interface ItemCounterContainerType{
width?:string;
}
const ItemCounter = (props:ItemCounterContainerType):React.ReactElement=>{

    const { cartState } = useContext(AppContext)
    const {cart,setCart } = cartState


    const handleIncrement = ()=>setCart({...cart,'qty_num':cart.qty_num+1})
    const handleDecrement = ()=>{
        if(cart.qty_num >=2){
            setCart({...cart,'qty_num':cart.qty_num-1})
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