import ItemDetail from "./itemDetail/itemDetail"
import ItemImagePreview from "./ItemImagePreview/ItemImagePreview"
import {MainBodyContainer} from "./mainBody.style"
import CustomModal from "../Modal/Modal"
import { useState,useContext } from "react"
import { useMediaQuery } from 'react-responsive'
import { AppContext } from "../../Context/AppContext"

const MainBody = ()=>{
    const  [modalIsOpen,setModalIsOpen] = useState(false)

    const { cartState } = useContext(AppContext)
    const {cart,setCart } = cartState

    const AvoidCartPopOnMobile = useMediaQuery({
        query: '(min-width: 900px)'
      })
    return (
        <>        
        <br />
        <CustomModal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            element={<ItemImagePreview isInModalState={true}/>}
            />
        <MainBodyContainer>
            <ItemImagePreview  openModalPic={()=>{
                if(AvoidCartPopOnMobile){
                    //this means when it on mobile dont pop up use the arrow
                    setModalIsOpen(true)
                }
                }} />
            <ItemDetail />

        </MainBodyContainer>

        </>
    )
}




export default MainBody