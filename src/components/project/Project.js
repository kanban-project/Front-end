import React, {useState} from "react";
import './Project.css';
import LinesEllipsis from 'react-lines-ellipsis';
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import axios from "axios";

function Project({id, title, description}){

    const [mousehover, setMousehover] = useState(false);

    const deleteProject = () => {
        try {
          axios.delete("http://101.101.211.195:8000/api/project/"+String(id)+"/").then(() => {alert("삭제되었습니다")});
        } catch (error) {
          if (!axios.isCancel(error)) {
            throw error;
          }
        }
      };

    const handleMousehover = () => {
        setMousehover(!mousehover);
    }

    return (
        <div className="Project">
            <Link to={`/board/${id}`}>
            <div className="Project__title">
                <h1>{title}</h1>
            </div>
            <div className="Project__description">
                <LinesEllipsis
                    text={description}
                    maxLine='2'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />
            </div>
            </Link>
            <Button onClick={deleteProject} onMouseEnter={handleMousehover} onMouseLeave={handleMousehover} className="hover-btn" >
             DELETE
            </Button>
        </div>
    )
}

export default Project;