import React, {useState, useCallback} from 'react';

const CallbackExample = () => {
	const [task, setTask] = useState([])

	const addTask = useCallback(() => {
		setTask((prevTasks) => [...prevTasks, 'Some Task']);
	}, [setTask]); 

  return <div>
	  <Button addTask={addTask} />
	  {task.map((task, index) => (
		<p key={index}>{task}</p>
	  	  ))} 
		  <hr />
	</div>
}

const Button = React.memo(({addTask}) => {
	console.log('Button rendered');
	return <div>  
		<button className='btn' onClick={addTask}>Add Task</button>
	</div>
})

export default CallbackExample;
