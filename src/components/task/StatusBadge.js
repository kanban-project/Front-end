import React from 'react'

const getBadgeName = name =>{
    switch (name) {
      case "Open":
        return "Open";
      case "Inprogress":
        return "Inprogress";
      case "Completed":
        return "Completed";
      case "Closed":
        return "Closed";
      default:
        return "";
    }
  }

  const StatusBadge = ({statusName}) => {
    return (
      <div className={`badge badge-${getBadgeName(statusName)}`}>
        {getBadgeName(statusName)}
      </div>
    );
  };
  
  export default StatusBadge;

