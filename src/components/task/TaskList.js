import React, {Component} from 'react';
import axios from "axios";
import Task from "./Task";
import {Container, Jumbotron, Row, Col} from "reactstrap";
import {Button, ButtonGroup, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import './Task.css';
import StatusBadge from './StatusBadge';
import TaskAdd from './TaskAdd';

export default class TaskList extends Component {

    state = {
        tasks: [],
        update: false
    };

    _isUpdate = () => {
        this.setState({update:true});
        this.setState({update:false});
    }


    componentDidMount() {
        this._getTasks();
    }

    componentDidUpdate() {
        if(this.state.update){
            this._getTasks();
        }
    }
    
    _getTasks = async () => {
        try{ 
            await 
                axios.get('http://localhost:8000/api/task/project/' + String(this.props.project_id) + '/status/' + String(this.props.status_id))
                .then(response => {
                console.log(response.data);
                this.setState({tasks : response.data});
                });
        } catch (error) {
            if (!axios.isCancel(error)) {
            throw error;
          }
        } 
    };

    _renderTasks = () => {
        const tasks = this.state.tasks.map(task => {
            return <Task 
            task_id={task.id}
            isUpdate={this._isUpdate}
            due_date={task.due_date}
            created_at={task.created_at}
            title={task.title} 
            description={task.description}
            status={task.status}
            priority={task.priority} />
        })
        return tasks
    }

    render() {
        return (
            <>
                <StatusBadge statusName={this.props.status}/>
                {this._renderTasks()}
                <TaskAdd isUpdate={this._isUpdate} prior={1} status={this.props.status_id} projectId={this.props.project_id}/>
            </>
        );
    }
}