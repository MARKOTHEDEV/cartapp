import {
    MainImageContainer,
    PreviewBoxContainer,ThumbNailImageContainer,
    ThunbNail,Container
} from "./ItemImagePreview.style"
import ShoeMainPics from "../../../asset/image-product-1.jpg"
import LeftIcon from "../../../asset/icon-previous.svg";
import RightIcon from "../../../asset/icon-next.svg";
import {BiChevronLeft} from "react-icons/bi"
import {BiChevronRight} from "react-icons/bi"
import { ItemImagePreviewType } from "./ItemImagePreview.type";


const ItemImagePreview:React.FC<ItemImagePreviewType> = ({openModalPic,isInModalState=false})=>{


    return(
        <Container>
            <MainImageContainer>
                <img  src={ShoeMainPics} alt="" onClick={()=>{
                    if(openModalPic){
                        openModalPic()
                    }
                }} />

                <PreviewBoxContainer isInModalState={isInModalState}>
                    <BiChevronRight/>

                    <BiChevronLeft/>
                </PreviewBoxContainer>
            </MainImageContainer>

            {/* 
            the three images would appear hear when the time comes
            */}
            <ThumbNailImageContainer>
                {[...new Array(4)].map(()=>(
                    <ThunbNail>
                    <img src={ShoeMainPics} alt="" />
                </ThunbNail>
                ))}
                
            </ThumbNailImageContainer>  
        </Container>
    )
}


export default ItemImagePreview