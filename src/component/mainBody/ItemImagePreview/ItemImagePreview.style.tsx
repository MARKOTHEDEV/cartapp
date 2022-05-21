import styled,{css} from "styled-components"


export const MakeImageFitpage= css`
 width: 100%;
        height: 100%;
`
export const MainImageContainer = styled.div`
    width: 100%;
    /* height: 50%; */
    position: relative;
    img{
        ${MakeImageFitpage}
    }
`


export const PreviewBoxContainer = styled.div`
 position:absolute ;
 top: 40%;
 left: 0;
 width: 100%;
 /* border: 1px solid red; */
 display: flex;
 flex-direction: row-reverse;
 justify-content: space-between;
 padding: 0 .5rem;


svg{
    font-size: 2.4rem;
    background-color: white;
    border-radius:50% ;
    cursor: pointer;
}
`

