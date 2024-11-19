import { parseAsInteger, useQueryState } from "nuqs";
import type React from "react";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

const App: React.FC = () => {
	const [counter, setCounter] = useQueryState(
		"counter",
		parseAsInteger.withDefault(0),
	);
	return (
		<div className="w-full min-h-screen flex flex-col justify-center items-center gap-8">
			<div className="flex items-center gap-4">
				<Button onClick={() => setCounter((prev) => prev - 1)} className="w-16">
					-
				</Button>
				Counter : {counter}
				<Button onClick={() => setCounter((prev) => prev + 1)} className="w-16">
					+
				</Button>
			</div>
			<div className="fixed bottom-12 right-12">
				<ModeToggle />
			</div>
		</div>
	);
};

export default App;
