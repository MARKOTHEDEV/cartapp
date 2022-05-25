import  {useState} from "react"
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
    
    const [slideIndex, setSlideIndex] = useState(1)
    // console.log({"big l":process.env.PUBLIC_URL})
    const  MAX_PICS =4//let not lie to out self i aready know the amount of image am dealing with );

    const nextSlide = () => {
        if(slideIndex !==MAX_PICS){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === MAX_PICS){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(MAX_PICS)
        }
    }
    const moveDot = (index:number) => {
        setSlideIndex(index)
    }
    return(
        <Container>
            <MainImageContainer>
                <img  src={process.env.PUBLIC_URL+`/shoeImage/image-product-${slideIndex}.jpg`} alt="mainImage" onClick={()=>{
                    if(openModalPic){
                        openModalPic()
                    }
                }} />
                <PreviewBoxContainer isInModalState={isInModalState}>
                    <BiChevronRight  onClick={(e)=>nextSlide()}/>

                    <BiChevronLeft onClick={(e)=>prevSlide()}/>
                </PreviewBoxContainer>
            </MainImageContainer>

            {/* 
            the three images would appear hear when the time comes
            */}
            <ThumbNailImageContainer>
                {[...new Array(4)].map((data,index)=>(
                    <ThunbNail
                     currentItem={slideIndex} 
                    onClick={()=>moveDot(index+1)}
                    >
                    <img src={process.env.PUBLIC_URL+`/shoeImage/image-product-${index+1}.jpg`} alt="" />
                </ThunbNail>
                ))}
                
            </ThumbNailImageContainer>  
        </Container>
    )
}


export default ItemImagePreview