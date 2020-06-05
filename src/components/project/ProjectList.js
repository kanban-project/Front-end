import React, {useState, useEffect} from 'react';
import axios from "axios";
import Project from "./Project";
import Header from "./Header";

const ProjectList = () => {

    const state = {
        projects: [],
    };

    const [projectAPI, setProjectAPI] = useState(state);

    useEffect(() => {
        const _callApi = async () => {
            try{ 
            await axios.get('http://101.101.211.195:8000/api/project/')
            .then(response => {
                console.log(response.data);
                setProjectAPI({projects : response.data});
                });
            } catch (error) {
                if (!axios.isCancel(error)) {
                throw error;
              }
            } 
        };
        _callApi();
        }
      );

    const _renderProjects = () => {
        const projects = projectAPI.projects.map(project => {
            return <Project 
            id={project.id} 
            title={project.title} 
            description={project.description} />
        })
        return projects
    }
 
    return (
        <div className="ProjectList">
        <Header />
        {_renderProjects()}
        </div> 
    );  
};

export default ProjectList;