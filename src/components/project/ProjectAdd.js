import React, {useState} from "react";
import {Button, ButtonGroup, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import SubmitButton from "./SubmitButton";


const ProjectAdd = (props) => {

  const {isUpdate} = props;
  const [modal, setModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");

  const modalToggle = () => setModal(!modal);
  const nameChange = (e) => setProjectName(e.target.value);
  const descChange = (e) => setProjectDesc(e.target.value);


  return (
    <>
      <ButtonGroup className="mb-3">
        <h1 className="end-inline-block m-0 pl-3" align="center">프로젝트 목록</h1>
        <Button onClick={modalToggle} outline color="danger" className="rounded-left rounded-right ml-2 mr-2 mb-1 mt-1" >
          ADD
        </Button>
      </ButtonGroup>
      <Modal isOpen={modal} toggle={modalToggle}>
        <ModalHeader toggle={modalToggle}>프로젝트 추가</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="projectName">프로젝트 이름</Label>
              <Input type="text" placeholder="write your project name" value={projectName} onChange={nameChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="projectDescription">프로젝트 설명</Label>
              <Input type="textarea" placeholder="write!" value={projectDesc} onChange={descChange}/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <SubmitButton isUpdate={isUpdate} modal={modal} setModal={setModal} projectName={projectName} setProjectName={setProjectName} projectDesc={projectDesc} setProjectDesc={setProjectDesc} />
        </ModalFooter>
      </Modal>
    </>
  );
};
export default ProjectAdd;