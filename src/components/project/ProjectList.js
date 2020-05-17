import React, {Component} from 'react';
import axios from "axios";
import Project from "./Project";

 
export default class ProjectList extends Component {

    state = {
        projects: [],
    };

    componentDidMount() {
        this._getProjects();
    }

    _callApi = () => {
        return axios.get('http://172.30.1.3:6006/project')
        .then(res => res.data)
    }

    _getProjects = async () => {
        const projects = await this._callApi();
        this.setState({ projects : projects})
    }

    _renderProjects = () => {
        const projects = this.state.projects.map(project => {
            return <Project 
            id={project.id} 
            title={project.title} 
            description={project.description} 
            user_id={project.user_id} />
        })
        return projects
    }

    render() {
        return (
          <div className="ProjectList">
              {this._renderProjects()}
          </div> 
        );
    }
}