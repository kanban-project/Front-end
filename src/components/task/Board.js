import React from 'react';
import { useParams } from 'react-router';
import TaskList from "./TaskList";
import './Board.css';

function Board() {
    var params = useParams();
    var task_id = params.id;
        return (
            <div className="Board">
                <TaskList id={task_id} />
            </div>
        );
    
}

export default Board;
