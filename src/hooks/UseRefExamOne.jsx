import {useRef} from 'react';


const UseRefExamOne = () => {
	const inputRef = useRef(null);
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(inputRef.current.value);
		inputRef.current.value = '';
		inputRef.current.focus();
	}
  return (
	<div>
	  <form onSubmit={onSubmit}>
		<h2>UseRef Example 1</h2>
		<label htmlFor="name">Name</label>
		<input type="text" ref={inputRef} id="name" placeholder="Enter your name" className="input" />
		<button type="submit" className="submit">Submit</button>
	  </form>
	</div>
  );
}

export default UseRefExamOne;
