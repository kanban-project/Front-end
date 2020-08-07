import React from "react";
import {Button} from "reactstrap";
import axios from "axios";


const SubmitButton = (props) => {
  const {isUpdate, prior, status, projectId, modal, setModal, taskName, taskDate, taskDesc, setTaskName, setTaskDate, setTaskDesc} = props;
  const onClickEnter = () => {
    try {
      axios.post("http://localhost:8000/api/task/",
        {
          'title' : taskName,
          'description' : taskDesc,
          'due_date' : taskDate,
          'priority' : prior,
          'status' : status,
          'project_id' : projectId
        }).then(() => {
          setModal(!modal);
          setTaskName("");
          setTaskDesc("");
          setTaskDate("");
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