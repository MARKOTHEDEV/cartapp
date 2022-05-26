import {createContext} from "react";
import {cartType,userCartType} from "../App.type"

interface AppcontextType{
"cartState":{
    cart:cartType,
    setCart:(value:cartType)=>void;
    },
    "userCartState":{
        userCartList:userCartType[],
        setUserCartList:(value:userCartType[])=>void;
    }
}

export const AppContext = createContext<AppcontextType>({} as AppcontextType)