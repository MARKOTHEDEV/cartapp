import ItemDetail from "./itemDetail/itemDetail"
import ItemImagePreview from "./ItemImagePreview/ItemImagePreview"
import {MainBodyContainer} from "./mainBody.style"
import CustomModal from "../Modal/Modal"
import { useState } from "react"
const MainBody = ()=>{
    const  [modalIsOpen,setModalIsOpen] = useState(false)

    // 
    return (
        <>        
        <br />
        <CustomModal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            element={<ItemImagePreview />}
            />
        <MainBodyContainer>
            <ItemImagePreview  openModalPic={()=>setModalIsOpen(true)} />
            <ItemDetail />

        </MainBodyContainer>

        </>
    )
}




export default MainBody