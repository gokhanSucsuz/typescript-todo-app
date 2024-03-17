import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { todoType } from "./appTypes";
import TaskList from "./TaskList";

const App: FC = () => {
	const [task, setTask] = useState<string>("");
	const [workDay, setWorkDay] = useState<number>(0);
	const [todoList, setTodoList] = useState<todoType[]>([]);
	console.log(todoList);

	const addNewTask = (): void => {
		const newTask = {
			taskName: task,
			workDay: workDay,
		};
		setTodoList([...todoList, newTask]);
		setTask("");
		setWorkDay(0);
	};
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.name == "task") {
			setTask(event.target.value);
		} else {
			setWorkDay(Number(event.target.value));
		}
	};

	const deleteTask = (nameToDelete: string): void => {
		setTodoList(todoList.filter((task) => task.taskName != nameToDelete));
	};
	return (
		<>
			<div className="container shadow p-3 rounded-3 d-flex justify-content-center my-5">
				<div className="row flex-column">
					<div className="col-sm d-flex justify-content-center">
						<h1 className="fw-bolder text-info p-2 ">
							Typescript Simple Todo App
						</h1>
					</div>
					<div className="col-sm">
						<div className="container shadow p-3 rounded-3 d-flex justify-content-center">
							<div className="row shadow p-3">
								<div className="col-sm d-flex gap-3 flex-column">
									<input
										className="form-control"
										type="text"
										value={task}
										name="task"
										placeholder="Type your task..."
										onChange={handleChange}
									/>
									<input
										className="form-control"
										type="number"
										value={workDay}
										name="workDay"
										placeholder="How many days will your task be completed?"
										onChange={handleChange}
									/>
									<button
										className="btn btn-success btn-sm"
										onClick={addNewTask}>
										New Task Add
									</button>
								</div>
							</div>
						</div>
						<div className="container shadow py-3 mt-1 rounded-3 ">
							<ul className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 list-group flex-row ">
								{todoList.map((task: todoType, index: number) => (
									<TaskList key={index} task={task} deleteTask={deleteTask} />
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
