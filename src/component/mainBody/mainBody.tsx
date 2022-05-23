import ItemDetail from "./itemDetail/itemDetail"
import ItemImagePreview from "./ItemImagePreview/ItemImagePreview"
import {MainBodyContainer} from "./mainBody.style"
const MainBody = ()=>{



    return (
        <>
        <br />
        <MainBodyContainer>
            <ItemImagePreview />
            <ItemDetail />

        </MainBodyContainer>

        </>
    )
}




export default MainBody