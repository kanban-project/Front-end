import React from "react";
import {Button} from "reactstrap";
import axios from "axios";


const OXButton = (props) => {
  const {isUpdate, modal, setModal, projectName, projectDesc, setProjectName, setProjectDesc} = props;
  const onClickEnter = () => {
    try {
      axios.post("http://101.101.211.195:8000/api/project/",
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
      <Button type="submit" color="primary" onClick={onClickEnter}>OK</Button>
      {" "}
      <Button color="secondary" onClick={onClickLeave}>Cancel</Button>
    </>
  );
};
export default OXButton;