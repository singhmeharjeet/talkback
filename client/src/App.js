import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Join from "./components/Join/Join.jsx"
import List from "./components/List/List.jsx"
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Join />} />
					<Route path="/join" element={<Join />} />
					<Route path="/list" element={<List />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
