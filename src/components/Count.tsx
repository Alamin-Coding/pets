"use client";

import { useState } from "react";

const Count = () => {
    	const [count, setCount] = useState(0);
	console.log(count);
	return (
		<div>
			<p>Count : {count}</p>
			<button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
		</div>
	);
};

export default Count;
