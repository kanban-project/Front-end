import React, {useState} from "react";
import LinesEllipsis from 'react-lines-ellipsis';
import {Link} from "react-router-dom";
import {Card, CardBody, CardText, CardTitle, Col, Row, CardHeader, CardFooter} from "reactstrap";
import {Button, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import DeleteButton from "./DeleteButton";

const ProjectItem = ({isUpdate, id, title, description}) => {

    const [modal, setModal] = useState(false);
    const modalToggle = () => setModal(!modal);

    return (
        <Col xs="4" sm="4" md="4" lg="4">
            <Card style={{backgroundColor: "#eaffe0"}} className="m-3 p-1">
                <CardHeader style={{backgroundColor: "#ffffff", height: "60px"}} className="p-0 m-0" >
                    <CardTitle className="h-100 m-0">
                        <Row className="mt-auto mb-auto h-100">
                            <Col xs="9" sm="9" md="9" lg="9">
                                <h4>{title}</h4>
                            </Col>
                            <Col xs="3" sm="3" md="3" lg="3">
                                <Button className="border-0 float-right" 
                                    onClick={modalToggle} style={{backgroundColor: "#ffffff"}}>
                                    <h4 style={{color: "red"}}>X</h4>
                                </Button>
                            </Col>
                        </Row>
                    </CardTitle>
                </CardHeader>
                <Link to={`/board/${id}`} style={{textDecoration:"none", color:"black" }}>
                <CardBody style={{backgroundColor: "#ffffff", height: "150px"}} className="p-2">
                    <CardText>
                    <h6>
                        <LinesEllipsis
                            text={description}
                            maxLine='5'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'/>
                    </h6>
                    </CardText>
                </CardBody>
                </Link>
            </Card>
            <Modal isOpen={modal} toggle={modalToggle}>
                <ModalHeader toggle={modalToggle}>프로젝트 삭제</ModalHeader>
                    <ModalBody>
                        <Label for="comments on deletion">해당 프로젝트를 정말 삭제 하시겠습니까?</Label>
                    </ModalBody>
                <ModalFooter>
                    <DeleteButton isUpdate={isUpdate} modal={modal} setModal={setModal} id={id} />
                </ModalFooter>
            </Modal>
        </Col>
    )
}

export default ProjectItem;