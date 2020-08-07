import React from "react";
import {Button} from "reactstrap";
import {Link, useHistory} from "react-router-dom";

const LogoutButton = () => {

  let history = useHistory();

  const onClickEnter = () => {
    history.push("/login");
  };


  return (
    <>
      <Button color="primary" onClick={onClickEnter} className="rounded-left rounded-right ml-2 mr-2 mb-1 mt-1">로그아웃</Button>
    </>
  );
};
export default LogoutButton;