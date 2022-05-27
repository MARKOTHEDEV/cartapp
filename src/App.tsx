import React, { useState } from 'react';
import MainBody from './component/mainBody/mainBody';
import Nav from './component/Nav/Nav';
import {AppContext} from "./Context/AppContext";

export interface cartType{
  "actual_price":number;
  "qty_num":number;
}



export interface userCartType{
  "name":string;    
  "price":number|string;
  "id":number;
}

function App() {


  const [cart,setCart] = useState<cartType>({
    "actual_price":125.00,
    "qty_num":1
  })

  const [userCartList,setUserCartList] = useState<userCartType[]>([])

  return (
    <AppContext.Provider value={{
      "cartState":{cart,setCart},
      "userCartState":{userCartList,setUserCartList},
    }}>
      
      <Nav />
      <MainBody />
    </AppContext.Provider>
  );
}

export default App;
