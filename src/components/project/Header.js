import React from 'react';
import {Col, Row} from "reactstrap";
import ProjectAdd from "./ProjectAdd";

const Header = () => {

  return (
    <>
      <Row className="pt-3 pb-3">
        <Col xs="6" sm="6" md="6" lg="6" className="mt-auto mb-auto" >
          <ProjectAdd />
        </Col>
      </Row>
    </>
  );
};
export default Header;