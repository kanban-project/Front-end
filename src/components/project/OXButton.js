import React from "react";
import {Button} from "reactstrap";
import axios from "axios";


const OXButton = (props) => {
  const {modal, setModal, projectName, projectDesc} = props;
  const onClickEnter = () => {
    try {
      axios.post("http://172.30.1.3:6006/project",
        {
          projectName,
          projectDesc
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
      <Button type="submit" color="primary" onClick={onClickEnter}>OK</Button>
      {" "}
      <Button color="secondary" onClick={onClickLeave}>Cancel</Button>
    </>
  );
};
export default OXButton;