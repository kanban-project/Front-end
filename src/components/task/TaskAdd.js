import React, {useState} from "react";
import {Button, ButtonGroup, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import SubmitButton from "./SubmitButton";


const TaskAdd = (props) => {

  const {isUpdate, prior, status, projectId} = props;
  const [modal, setModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const modalToggle = () => setModal(!modal);
  const nameChange = (e) => setTaskName(e.target.value);
  const descChange = (e) => setTaskDesc(e.target.value);
  const dateChange = (e) => setTaskDate(e.target.value);

  return (
    <>
      <button type="button" onClick={modalToggle} className="task add">
          Add New Task
      </button>
      <Modal isOpen={modal} toggle={modalToggle}>
          <ModalHeader toggle={modalToggle}>테스크 추가</ModalHeader>
          <ModalBody>
              <Form>
                  <FormGroup>
                  <Label for="taskName">테스크 이름</Label>
                  <Input type="text" placeholder="write your task name" value={taskName} onChange={nameChange}/>
                  </FormGroup>
                  <FormGroup>
                  <Label for="taskDate">마감 기한</Label>
                  <Input type="text" placeholder="due date : format (YYYY-MM-DD)" value={taskDate} onChange={dateChange}/>
                  </FormGroup>           
                  <FormGroup>
                  <Label for="taskDescription">테스크 설명</Label>
                  <Input type="textarea" placeholder="write!" value={taskDesc} onChange={descChange}/>
                  </FormGroup>
              </Form>
          </ModalBody>
          <ModalFooter>
              <SubmitButton isUpdate={isUpdate} prior={prior} status={status} projectId={projectId} modal={modal} setModal={setModal} taskName={taskName} setTaskName={setTaskName} taskDesc={taskDesc} setTaskDesc={setTaskDesc} taskDate={String(taskDate)} setTaskDate={setTaskDate}/>
          </ModalFooter>
      </Modal>
    </>
  );
};
export default TaskAdd;