import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./components/list/Join.jsx"
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Join />} />
					<Route path="/join" element={<Join />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
