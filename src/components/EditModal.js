import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditModal = (props) => {
  const {
    buttonLabel,
    className,todo,handleEdit
  } = props;

  const [modal, setModal] = useState(false);
  const [editText,setEditText]=useState(todo.text)
  const toggle = () => setModal(!modal);
  const editt=()=>{
      handleEdit(todo.id,editText)
      toggle()
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editt}>save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;