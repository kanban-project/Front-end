import React from 'react';
import { useParams } from 'react-router';
import TaskList from "./TaskList";
import './Board.css';
import {Container, Jumbotron, Row, Col} from "reactstrap";

const Board = () => {
  var params = useParams();
  var task_id = params.id;
      return (
        <>
          <Col xs="3" md="3" lg="3" className="mb-5"><TaskList project_id={task_id} status={"Open"} status_id={1}/></Col>
          <Col xs="3" md="3" lg="3" className="mb-5"><TaskList project_id={task_id} status={"Inprogress"} status_id={2}/></Col>
          <Col xs="3" md="3" lg="3" className="mb-5"><TaskList project_id={task_id} status={"Completed"} status_id={3}/></Col>
          <Col xs="3" md="3" lg="3" className="mb-5"><TaskList project_id={task_id} status={"Closed"} status_id={4}/></Col>
        </>
      );
}
export default Board;