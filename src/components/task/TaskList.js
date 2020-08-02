import React, {Component} from 'react';
import axios from "axios";
import Task from "./Task";
 
export default class TaskList extends Component {

    state = {
        tasks: []
    };
    
    componentDidMount() {
        this._getTasks();
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