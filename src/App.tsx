import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { DialogDemo } from "@/components/TheDialog/index";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<span className="text-base">count is</span>
				<span className="text-lg">{count}</span>
			</div>
			<div className="card">
				<Button onClick={() => setCount((count) => count + 1)}>add 1(normal style)</Button>
				&nbsp;
				<button onClick={() => setCount((count) => count + 2)}>add 2(shadcn style)</button>
			</div>
			<div>
				<DialogDemo></DialogDemo>
			</div>
			<p className="read-the-docs">shadcn-app</p>
		</>
	);
}

export default App;
