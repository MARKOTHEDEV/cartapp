export interface CustomModalType{
    modalIsOpen:boolean;
    setModalIsOpen:(value:boolean)=>void,
    element:React.ReactElement,
}