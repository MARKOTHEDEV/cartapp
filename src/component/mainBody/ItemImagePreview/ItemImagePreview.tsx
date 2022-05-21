import {
    MainImageContainer,
    PreviewBoxContainer,
} from "./ItemImagePreview.style"
import ShoeMainPics from "../../../asset/image-product-1.jpg"
import LeftIcon from "../../../asset/icon-previous.svg";
import RightIcon from "../../../asset/icon-next.svg";
import {BiChevronLeft} from "react-icons/bi"
import {BiChevronRight} from "react-icons/bi"

const ItemImagePreview = ()=>{


    return(
        <div>
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
        </div>
    )
}


export default ItemImagePreview