import React, {useState, useEffect, Component} from 'react';
import axios from "axios";
import ProjectItem from "./ProjectItem";
import Header from "./Header";
import {Container, Jumbotron, Row, Col} from "reactstrap";

export default class ProjectList extends Component {

     state = {
        projects: [],
        update: false
    };

    _isUpdate = () => {
        this.setState({update:true});
        this.setState({update:false});
    }

    _getProject = async () => {
        try{ 
            await 
                axios.get('http://172.30.1.3:8000/api/project/')
                .then(response => {
                console.log(response.data);
                this.setState({projects : response.data});
                });
        } catch (error) {
            if (!axios.isCancel(error)) {
            throw error;
          }
        } 
    };

    componentDidMount() {
        this._getProject();
    }

    componentDidUpdate() {
        if(this.state.update){
            this._getProject();
        }
    }
      
    _renderProjects = () => {
        const projects = this.state.projects.map(project => {
            return <ProjectItem
            isUpdate={this._isUpdate} 
            id={project.id} 
            title={project.title} 
            description={project.description} />
        })
        return projects
    }

    render () {
        return (
            <div className="ProjectList">
            <Header isUpdate={this._isUpdate}/>
            <Container>
                <Jumbotron>
                    <Row xs="3" md="3" lg="3" className="mb-5">
                        {this._renderProjects()}
                    </Row>
                </Jumbotron>
            </Container>
            </div> 
        );  
   };
};
