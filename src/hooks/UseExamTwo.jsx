import {useState, useEffect, useRef} from 'react';

const UseExamTwo = () => {
	const [name, setName] = useState('');
	const renders = useRef(1);

	useEffect(() => {
		renders.current = renders.current + 1;
	})
  return (
	<div>
		<hr /> 
		<h2>UseRef Example 2</h2>
		<h1>Renders: {renders.current}</h1>
		<input type="text" value={name} 
		onChange={(e) => setName(e.target.value)} 
		placeholder="Enter your number" className="input" />
	</div>
  );
}

export default UseExamTwo;
