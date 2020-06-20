import React, { useState } from 'react';
import './Login.css';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import OXButton from './OXButton';
import axios from "axios";
import {Link, BrowserRouter, Switch, Route, useHistory, Redirect} from "react-router-dom";
import AuthRoute from "./AuthRoute";
import ProjectList from "../project/ProjectList";

const Login = () => {

  const [modal, setModal] = useState(false);
  const [userId, setuserId] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [auth, setAuth] = useState(false);
  let history = useHistory();

  const modalToggle = () => setModal(!modal);
  const IdChange = (e) => setuserId(e.target.value);
  const PasswordChange = (e) => setuserPassword(e.target.value);

  const _checkLogin = () => {
     try {
       return( 
        axios.post("http://172.30.1.3:6006/user",
          {
            userId,
            userPassword
          }).then(() => {
            history.push("/project");
          }));
     }catch (error) {
      if (!axios.isCancel(error)) {
        alert("비밀번호, 혹은 아이디가 일치하지 않습니다")
        setuserId("");
        setuserPassword("")
      }
    }
  }


  return (
    <div className="Login">
      <form className="myForm">
        <div className="form-group">
          <label htmlFor="idInput">아이디</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="your id"
            value={userId}
            onChange={IdChange}
          />
        </div>
        <div className="form-group">
            <label htmlFor="passwordInput">패스워드</label>
            <input
            type="password"
            className="form-control"
            id="passwordInput"
            value={userPassword}
            onChange={PasswordChange}
            />
        </div>
        <Button color="primary" type="submit" onClick={_checkLogin}>로그인</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color="primary" onClick={modalToggle}>회원 가입</Button>
        <Modal isOpen={modal} toggle={modalToggle}>
          <ModalHeader toggle={modalToggle}>회원 가입</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="userId">아이디</Label>
                <Input type="text" placeholder="write your id" value={userId} onChange={IdChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="userPassword">비밀번호</Label>
                <Input type="password" value={userPassword} onChange={PasswordChange}/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <OXButton modal={modal} setModal={setModal} userId={userId} userPassword={userPassword} />
          </ModalFooter>
      </Modal>
      </form>
    </div>
  );
    
  }

  
  export default Login;