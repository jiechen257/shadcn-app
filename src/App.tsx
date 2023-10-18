import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
// import {TheAlert} from "@/components/TheAlert/index!"

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<div>count is {count}</div>
			</div>
			<div className="card">
				<Button onClick={() => setCount((count) => count + 1)}>add 1</Button>
				&nbsp;
				<button onClick={() => setCount((count) => count + 2)}>add 2</button>
			</div>
			<p className="read-the-docs">
        shadcn-app
			</p>
		</>
	);
}

export default App;
