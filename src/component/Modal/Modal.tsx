import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { CustomModalType } from './Modal.type';
import {
  MdClose
} from "react-icons/md";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:"transparent",
    background:"transparent",
    border:"transparent",
    // border:"1px solid red",
    "outline":'none',
    // "margin":"0 auto"
    
  },
  
  overlay:{
    backgroundColor:"#000000b5",
    "zIndex":500
    }
};



const CustomModal:React.FC<CustomModalType>=({
    setModalIsOpen,modalIsOpen,element
})=>{

  function closeModal() {
    setModalIsOpen(false)
  }

  useEffect(()=>{

  },[])

  {/* <button onClick={openModal}>Open Modal</button> */}
  return (
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{"position":"relative",
        // "border":'1px solid yellow',
        "width":"60%","margin":"0 auto",
        "display":"flex","alignItems":"center","justifyContent":'center',
        }} >
        <MdClose onClick={closeModal} style={{
          "outline":"none","border":"transparent",color:'#ff7d1a',"position":"absolute",
          "top":"-24px",
          "right":"28%","fontSize":"1.5rem",cursor:"pointer"}}/>

        {
          element
        }
        </div>
      </Modal>
  );
}



export default CustomModal