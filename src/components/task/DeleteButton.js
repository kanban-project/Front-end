import React from "react";
import {Button} from "reactstrap";
import axios from "axios";

const DeleteButton = (props) => {
  const {isUpdate, modal, setModal, id} = props;

  const onClickEnter = () => {
    try {
      axios.delete("http://localhost:8000/api/task/"+String(id)+"/").then(() => {
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
      <Button type="submit" color="primary" onClick={onClickEnter}>확인</Button>
      {" "}
      <Button color="secondary" onClick={onClickLeave}>취소</Button>
    </>
  );
};
export default DeleteButton;