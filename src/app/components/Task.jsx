import React from 'react'

export default function Task({ task }) {
    return (
      <div className="d-flex p-3 gap-2 align-items-center border-bottom">
        {task.isDone ? (<span className="text-decoration-line-through">{task.title}</span> ) : (<span>{task.title}</span>)}

        <button className="btn btn-success">Done</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    );
  }