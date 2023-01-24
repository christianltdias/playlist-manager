import { useState } from "react";
import Portal from "../../providers/portal/Portal";
import FlexCol from "../layout/flex/flex-col/FlexCol";
import FlexRow from "../layout/flex/flex-row/FlexRow";
import "./Modal.scoped.scss";

interface IModalProps {
  title?: string,
  showClose?: boolean,
  onClose?: (obj: any) => void,
  children: React.ReactNode,
  footer?: React.ReactNode, 
}

const Modal: React.FC<IModalProps> = ({ title, showClose, onClose, children, footer }) => {
  const [showModal, setShowModal] = useState(true);
  
  if(showModal){
    return (
      <Portal
        className="modal">
        <FlexCol
          className="modal-content">
          {(title || showClose) && (
            <FlexRow 
              className="modal-header">
              <h4>{title}</h4>
              {showClose && <button className="modal-close" onClick={onClose ? onClose : () => setShowModal(false)}>x</button>}
            </FlexRow>
          )}
          <div className="modal-child">
            {children}
          </div>
          { footer && (
            <FlexRow 
              className="modal-footer">
              {footer}
            </FlexRow>
          )}
        </FlexCol>
      </Portal>
  )
  } else {
    return null;
  }
};

export default Modal;
