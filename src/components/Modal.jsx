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
                      <div className="modal-button">
                      <IoMdClose onClick={props.close} className="modal-icon"/>
                      </div>
                </div>
            </div>
          );
    }

};

export default Modal;