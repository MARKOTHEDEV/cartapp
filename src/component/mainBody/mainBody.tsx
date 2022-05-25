import ItemDetail from "./itemDetail/itemDetail"
import ItemImagePreview from "./ItemImagePreview/ItemImagePreview"
import {MainBodyContainer} from "./mainBody.style"
import CustomModal from "../Modal/Modal"
import { useState } from "react"
import { useMediaQuery } from 'react-responsive'

const MainBody = ()=>{
    const  [modalIsOpen,setModalIsOpen] = useState(false)

    
    
    const AvoidCartPopOnMobile = useMediaQuery({
        query: '(min-width: 900px)'
      })
      console.log({
        AvoidCartPopOnMobile
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