import Button from "../../buttons/Button";
import FlexRow from "../../layout/flex/flex-row/FlexRow";
import Modal from "../Modal";
import "./ConfirmationModal.scoped.scss";

interface IConfirmationModalProps {
  children?: React.ReactNode,
  onConfirm: () => void,
  onCancel: () => void,
  onClose?: () => void,
  title?: string,
}

const ConfirmationModal: React.FC<IConfirmationModalProps> = (
  {
    children,
    onConfirm,
    onCancel,
    onClose,
    title
  }) => {
  
    const modalFooter = (
      <FlexRow
        gap
        justify="flex-end"
        className="confirm-footer">
        <Button onClick={onCancel} buttonType="red">Cancel</Button>
        <Button onClick={onConfirm} buttonType="primary">Confirm</Button>
      </FlexRow>
    )


  return (
    <Modal
      title={title}
      showClose={!!onClose}
      onClose={onClose}
      footer={modalFooter}>
        {children}
    </Modal>
  )
}

export default ConfirmationModal;