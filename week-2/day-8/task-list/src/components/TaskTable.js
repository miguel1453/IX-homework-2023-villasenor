import React, { useState } from 'react';

export default function TaskTable(props) {

    return (
        <div>
            {props.loading? (
                <div className="spinner-border" role="status"></div>
            ) : (
            <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Complete</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tasks.map((task) => {
                            return (
                                <tr key={task.id}>
                                    <td>{task.name}</td>
                                    <td>
                                        <div>
                                            <i className=
                                                {task.complete ? 'bi bi-circle-fill' : 'bi bi-circle'}
                                                onClick={() => props.onTaskCompleteToggle(task.id)}>

                                            </i>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => props.onTaskRemove(task.id)}>
                                            <i className='bi bi-trash'></i>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </>

            )}
        </div>
    )
}
