import { useState } from 'react';
import Todo from './Todo';

const UseRefExamThree = () => {
	const [showTodo, setShowTodo] = useState(true);

  return (
	<div>
		<h2>UseRefExample3</h2>
	  	{showTodo && <Todo />}
		<button onClick={() => setShowTodo(!showTodo)} className='btn'>Toggle Todo</button>
		<hr /> 
	</div>
  );
}

export default UseRefExamThree;
