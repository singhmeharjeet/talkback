import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Join from "./components/Join/Join.jsx"
import List from "./components/List/List.jsx"
import Create from "./components/Create/Create.jsx"
import io from 'socket.io-client'


const BASE_URL = `http://localhost:5100`

function App() {
	const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(BASE_URL)
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Join />} />
					<Route path="/join" element={<Join />} />
					<Route path="/list" element={<List />} />
					<Route path="/create" element={<Create socket={socket} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
