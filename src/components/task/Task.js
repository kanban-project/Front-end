import React, {useState} from "react";
import './Task.css';
import {Button, ButtonGroup, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import UpdateButton from "./UpdateButton";

const Task = ({task_id, project_id, isUpdate, title, description, due_date, created_at, status, priority}) => {
  
    const [modal, setModal] = useState(false);
    const [taskName, setTaskName] = useState(title);
    const [taskDesc, setTaskDesc] = useState(description);
    const [taskDate, setTaskDate] = useState(due_date);
  
    const modalToggle = () => setModal(!modal);
    const nameChange = (e) => setTaskName(e.target.value);
    const descChange = (e) => setTaskDesc(e.target.value);
    const dateChange = (e) => setTaskDate(e.target.value);

    return (
        <div className="task">
            <div className="task-header">
                <div className="task-title">{title}</div>
                <Button className="border-0 float-right" 
                    onClick={modalToggle} style={{backgroundColor: "#ffffff"}}>
                    <h6 style={{color: "blue"}}>수정</h6>
                </Button>
            </div>
            <div className="task-meta-area">
              <div className="meta">{`마감기한: ${due_date}`}</div>
                  <hr/>
                  <div className="meta">{description}</div>
            </div>
            <Modal isOpen={modal} toggle={modalToggle}>
                  <ModalHeader toggle={modalToggle}>프로젝트 수정</ModalHeader>
                  <ModalBody>
                    <Form>
                        <FormGroup>
                        <Label for="taskName">테스크 이름</Label>
                        <Input type="text" value={taskName} onChange={nameChange}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="taskDate">마감 기한</Label>
                        <Input type="text" value={taskDate} onChange={dateChange}/>
                        </FormGroup>           
                        <FormGroup>
                        <Label for="taskDescription">테스크 설명</Label>
                        <Input type="textarea" value={taskDesc} onChange={descChange}/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <UpdateButton isUpdate={isUpdate} prior={priority} status={status} task_id={task_id} projectId={project_id} modal={modal} setModal={setModal} taskName={taskName} taskDesc={taskDesc} taskDate={String(taskDate)} />
                </ModalFooter>
            </Modal>
        </div>
      );
}

export default Task;