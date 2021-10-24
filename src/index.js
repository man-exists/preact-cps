/* eslint-disable react/react-in-jsx-scope */
import './style';
import { useState } from 'preact/hooks'

export default function App() {

	const [text, setText] = useState("deez")

	const clickEvent = () => {
		setText("nuts")
	}

	return (
		<div>
			<h1>{text}</h1>
			<button onClick={clickEvent}>deez</button>
		</div>
	);
}
