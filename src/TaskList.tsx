import React from "react";
import { todoType } from "./appTypes";

type propsType = {
	task: todoType;
	deleteTask(nameToDelete: string): void;
};

function TaskList({ task, deleteTask }: propsType) {
	return (
		<div className="shadow border-info mb-1">
			<div className="m-3 p-1 border border-3 border-info d-flex flex-column gap-1">
				<li className="list-group-item">
					<span className="text-info">Task Name:</span> {task.taskName}
				</li>
				<li className="list-group-item">
					<span className="text-info">Task Duration:</span> {task.workDay} days
				</li>
				<button
					className="btn btn-danger btn-sm"
					onClick={() => deleteTask(task.taskName)}>
					Remove
				</button>
			</div>
		</div>
	);
}

export default TaskList;
