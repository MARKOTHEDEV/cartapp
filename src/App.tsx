import React, { useState } from 'react';
import MainBody from './component/mainBody/mainBody';
import Nav from './component/Nav/Nav';
import {AppContext} from "./Context/AppContext";
import {
  cartType,
  userCartType,
} from "./App.type"


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
