import styled,{css} from "styled-components"
import {PreviewBoxContainerType} from "./ItemImagePreview.type"

export const MakeImageFitpage= css`
 width: 100%;
        height: 100%;
`
export const Container = styled.div`

@media screen  and (min-width:900px){
    width: 40%;
}

@media screen  and (min-width:1000px){
                width: 45%;
            }
`
export const MainImageContainer = styled.div`
    width: 100%;
    /* height: 50%; */
    position: relative;
    img{
        ${MakeImageFitpage}
    }

    @media screen  and (min-width:900px){
        img{
            border-radius: 10px;
        }
    }
`
export const ThumbNailImageContainer = styled.div`
display: none;
@media screen  and (min-width:900px){
    /* border: 1px solid red; */
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
}
`
export const ThunbNail = styled.div`
width: 20%;
border-radius:10px ;

&:hover{
        cursor: pointer;
        opacity: .8;
}

    
img{
    border-radius:10px ;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition:all .4s ease-in-out;
    
    
}
&:nth-child(3){
    /* for */
    border: 2px solid ${({theme})=>theme.colors.primary.orange};
    img{
        opacity: .4;
        transform: scale(1.05);
        }
}
`

export const PreviewBoxContainer = styled.div<PreviewBoxContainerType>`
 position:absolute ;
 top: 40%;
 left: 0;
 width: 100%;
 /* border: 1px solid red; */
 display: flex;
 flex-direction: row-reverse;
 justify-content: space-between;
 padding: 0 .5rem;

 ${(props)=>{
     let newStyle =""
     if(props.isInModalState){
         newStyle =`
            top: 40%;
            left: -20px;
            width: 112%;
         `
     }


     return newStyle
 }

}


svg{
    font-size: 2.4rem;
    background-color: white;
    border-radius:50% ;
    cursor: pointer;
}
`

