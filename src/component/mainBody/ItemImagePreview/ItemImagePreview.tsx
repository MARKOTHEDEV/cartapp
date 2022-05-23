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
// import thumbnail1 from ""
const ItemImagePreview = ()=>{


    return(
        <Container>
            <MainImageContainer>
                <img  src={ShoeMainPics} alt="" />

                <PreviewBoxContainer>
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