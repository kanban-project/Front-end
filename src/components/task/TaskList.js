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
        return axios.get('localhost/api/task/' + String(this.props.id))
        .then(res => res.data)
    }

    _getTasks = async () => {
        const tasks = await this._callApi();
        this.setState({ tasks : tasks})
    }

    _renderTasks = () => {
        const tasks = this.state.tasks.map(task => {
            return <Task 
            id={task.project_id}
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
          <div className="TaskList">
              {this._renderTasks()}
          </div> 
        );
    }
}