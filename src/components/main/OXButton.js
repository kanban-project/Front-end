import React from "react";
import {Button} from "reactstrap";
import axios from "axios";


const OXButton = (props) => {
  const {modal, setModal, userId, userPassword} = props;
  const onClickEnter = () => {
    try {
      axios.post("http://localhost:6006/project",
        {
            userId,
            userPassword
        }).then(() => {
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
      <Button type="submit" color="primary" onClick={onClickEnter}>가입</Button>
      {" "}
      <Button color="secondary" onClick={onClickLeave}>취소</Button>
    </>
  );
};
export default OXButton;