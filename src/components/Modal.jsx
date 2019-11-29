import React from "react";
import { IoMdClose } from "react-icons/io";
import "../../public/css/modal.css";

const Modal = (props) => { 
    if(!props.show){
        return null;
    }else{
        return (
            <div className="modal">
                <div className="inner-modal">
                      {props.children}
                      <IoMdClose onClick={props.close} className="modal-button"/>
                </div>
            </div>
          );
    }

};

export default Modal;