import React from "react";
import './Project.css';
import LinesEllipsis from 'react-lines-ellipsis';
import {Link} from "react-router-dom";

function Project({id, title, description, user_id}){
    return (
        <div className="Project">
            <Link to={`/board/${id}`}>
            <div className="Project__title">
                <h1>{title}</h1>
            </div>
            <div className="Project__userid">
                작성자 : {user_id}
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
        </div>
    )
}

export default Project;