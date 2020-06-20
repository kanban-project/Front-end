import React from "react";
import {Button} from "reactstrap";
import axios from "axios";


const SubmitButton = (props) => {
  const {isUpdate, modal, setModal, projectName, projectDesc, setProjectName, setProjectDesc} = props;
  const onClickEnter = () => {
    try {
      axios.post("http://172.30.1.3:8000/api/project/",
        {
          'title' : projectName,
          'description' : projectDesc
        }).then(() => {
          setModal(!modal);
          setProjectName("");
          setProjectDesc("");
          isUpdate();
      });
    } catch (error) {
      if (!axios.isCancel(error)) {
        throw error;
      }
    }
  };

  const onClickLeave = () => {
    setModal(!modal);
  };

  return (
    <>
      <Button type="submit" color="primary" onClick={onClickEnter}>확인</Button>
      {" "}
      <Button color="secondary" onClick={onClickLeave}>취소</Button>
    </>
  );
};

export default SubmitButton;