import React, { useState } from "react";


import "./App.css";

const App = () => {

const [counter, setCounter] = useState(0)


const handleClick1 = () => {
	
	setCounter(counter + 1)
}


const handleClick2 = () => {
	
	setCounter(counter - 1)
}

return (
	<div style={{
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '300%',
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: '15%',
  backgroundColor:'yellow',
	}}>
20IT076 - Inc / Dec Counter
	<div style={{
		fontSize: '100%',
		position: 'static',
		top: '30vh',
    color: 'red',
	}}>
		{counter}
	</div>
	<div className="buttons">
		<button style={{
		fontSize: '90%',
		position: 'static',
		top: '30vh',
		marginRight: '18px',
		backgroundColor: 'grey',
		borderRadius: '87%',
		color: 'blue',
		}}
		onClick={handleClick1}>+ increment</button>
		<button style={{
		fontSize: '90%',
		position: 'static',
		top: '30vh',
		marginLeft: '18',
		backgroundColor: 'grey',
		borderRadius: '87%',
		color: 'blue',
		}}
		onClick={handleClick2}>- decrement </button>
	</div>
	</div>
)
}

export default App
