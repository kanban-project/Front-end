import React from "react";
import './Project.css';
import LinesEllipsis from 'react-lines-ellipsis';

function Project({id, title, description, user_id}){
    return (
        <div className="Project">
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
        </div>
    )
}

export default Project;