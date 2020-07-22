import React from "react";
import './Task.css';
import LinesEllipsis from 'react-lines-ellipsis';

function Task({project_id, title, description, due_date, created_at, status, priority}){
    return (
        <div className="Task">
            <div className="Task__title">
                <h1>{title}</h1>
            </div>
            <div className="Task__description">
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

export default Task;