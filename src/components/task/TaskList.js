import React, {Component} from 'react';
import axios from "axios";
import Task from "./Task";
 
export default class TaskList extends Component {

    state = {
        tasks: [],
    };
    
    componentDidMount() {
        this._getTasks();
    }
    
    _callApi = () => {
        return axios.get('http://172.30.1.3:6006/task/' + String(this.props.id))
        .then(res => res.data)
    }

    _getTasks = async () => {
        const tasks = await this._callApi();
        this.setState({ tasks : tasks})
    }

    _renderTasks = () => {
        const tasks = this.state.tasks.map(task => {
            return <Task 
            id={task.id} 
            title={task.title} 
            description={task.description} 
            user_id={task.user_id} />
        })
        return tasks
    }

    render() {
        return (
          <div className="TaskList">
              {this._renderTasks()}
          </div> 
        );
    }
}