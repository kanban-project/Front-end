import React from 'react';
import {Col, Row, FormGroup} from "reactstrap";
import ProjectAdd from "./ProjectAdd";
import LogoutButton from "./LogoutButton";

const Header = (props) => {

  const {isUpdate} = props;

  return (
    <>
      <Row className="pt-3 pb-3">
        <Col xs="6" sm="6" md="6" lg="6" className="mt-auto mb-auto" >
          <ProjectAdd isUpdate={isUpdate}/>
        </Col>
        <Col xs="6" sm="6" md="6" lg="6" className="mt-auto mb-auto" >
          <FormGroup className="m-0 float-lg-right float-md-right">
            <LogoutButton/>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};
export default Header;