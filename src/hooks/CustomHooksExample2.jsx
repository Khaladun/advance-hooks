import useLocalStorage from "../CustomHooks/useLocalStorage";

const CustomHooksExample2 = () => {
	const [task, setTask] = useLocalStorage('task', ''); 
	const [tasks, setTasks] = useLocalStorage('tasks', []); 

	const onSubmit = (e) => {
		e.preventDefault();
		
		const taskObj = {
			task,
			completed: false,
			date: new Date().toDateString(),
		}

		setTasks([...tasks, taskObj]);
	}

	return (
		<>
	<form onSubmit={onSubmit}>
	  <div>
		<label htmlFor="task">Task</label>
		<input className="input"
		  type="text"
		  id="task"
		  value={task}
		  onChange={(e) => setTask(e.target.value)}
		  placeholder="Enter a task"
		/>
		<button className='btn'>Submit</button>
	  </div>
	</form>
	{tasks.map((task) => (
		<h3 key={task.date}> {task.task} </h3>
	))}
	</>
  );
}

export default CustomHooksExample2;
