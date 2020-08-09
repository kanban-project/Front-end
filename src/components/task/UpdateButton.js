import React from "react";
import {Button} from "reactstrap";
import axios from "axios";


const UpdateButton = (props) => {
  const {isUpdate, prior, status, task_id, projectId, modal, setModal, taskName, taskDate, taskDesc} = props;
  
  const onClickUpdate = () => {
    try {
      axios.put("http://localhost:8000/api/task/" + String(task_id) + "/",
        {
          'title' : taskName,
          'description' : taskDesc,
          'due_date' : taskDate,
          'priority' : prior,
          'status' : status,
          'project_id' : projectId
        }).then(() => {
          isUpdate();
          setModal(!modal);
      });
    } catch (error) {
      if (!axios.isCancel(error)) {
        throw error;
      }
    }
  };

  const onClickDelete = () => {
    try {
      axios.delete("http://localhost:8000/api/task/" + String(task_id) + "/").then(() => {
        alert("삭제되었습니다");
        isUpdate();
        setModal(!modal);
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
      <Button type="submit" color="primary" onClick={onClickUpdate}>수정</Button>
      {" "}
      <Button type="submit" color="danger" onClick={onClickDelete}>삭제</Button>
      {" "}
      <Button color="secondary" onClick={onClickLeave}>취소</Button>
    </>
  );
};

export default UpdateButton;