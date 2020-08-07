import React, {useState} from "react";
import './Task.css';
import {Button, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import DeleteButton from "./DeleteButton";

const Task = ({task_id, isUpdate, title, description, due_date, created_at, status, priority}) => {
  
    const [modal, setModal] = useState(false);
    const modalToggle = () => setModal(!modal);

    return (
        <div className="task">
            <div className="task-header">
                <div className="task-title">{title}</div>
                <Button className="border-0 float-right" 
                    onClick={modalToggle} style={{backgroundColor: "#ffffff"}}>
                    <h6 style={{color: "red"}}>X</h6>
                </Button>
            </div>
            <div className="task-meta-area">
              <div className="meta">{`마감기한: ${due_date}`}</div>
                  <hr/>
                  <div className="meta">{description}</div>
            </div>
            <Modal isOpen={modal} toggle={modalToggle}>
                  <ModalHeader toggle={modalToggle}>프로젝트 삭제</ModalHeader>
                      <ModalBody>
                          <Label for="comments on deletion">해당 프로젝트를 정말 삭제 하시겠습니까?</Label>
                      </ModalBody>
                  <ModalFooter>
                      <DeleteButton isUpdate={isUpdate} modal={modal} setModal={setModal} id={task_id} />
                  </ModalFooter>
            </Modal>
        </div>
      );
}

export default Task;