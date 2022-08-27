import React, {useState, useEffect} from "react";
import { getLocalStorage } from "../utils";
import { BASE_URL } from "../../components/constants";
import "./List.css";


async function getData(){
	try {
		const responseJSON = await (
			await fetch(`${BASE_URL}/list`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
		);
		console.log("responseJSON: ")
		console.log(responseJSON);

		if(responseJSON?.status){
			return responseJSON?.data;
		}else{
			console.log(responseJSON?.message)
		}
	} catch (error) {
		console.log("error", error);
	}
}


function List() {
	const [chamberList, setChamberList] = useState([]);

	
	useEffect(() => {setChamberList(getData());
		console.log(chamberList)}, []) 

	
	return (
		<>
			<div className="list-wrapper">
				<img className=""></img>
				<div className="AppGlass">
					<h1 className="list-title">Hey, {getLocalStorage().username}.<br/>Join a chamber now!</h1>

					<div className="list-search">
						<input type="text" placeholder="Search Topic..." />
					</div>

					{/* <div className="list-create-chamber">
						<button>Create My Own Chamber</button>
					</div> */}

					<div className="list-motion-table">
						<table>
							<thead>
								<tr
									style={{ backgroundColor: "rgba(0,0,0,0)" }}
								>
									<th>Chamber(s) Available</th>
									<th
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td
										style={{
											width: "90%",
											overflowY: "scroll",
										}}
									>
										This is a templated version of the
										motion
									</td>
									<td
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<button className="list-enter">
											Enter
										</button>
									</td>
								</tr>
								<tr>
									<td
										style={{
											width: "90%",
											overflowY: "scroll",
										}}
									>
										This is a templated version of the
										motion
									</td>
									<td
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<button className="list-enter">
											Enter
										</button>
									</td>
								</tr>
								<tr>
									<td
										style={{
											width: "90%",
											overflowY: "scroll",
										}}
									>
										This is a templated version of the
										motion
									</td>
									<td
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<button className="list-enter">
											Enter
										</button>
									</td>
								</tr>
								<tr>
									<td
										style={{
											width: "90%",
											overflowY: "scroll",
										}}
									>
										This is a templated version of the
										motion
									</td>
									<td
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<button className="list-enter">
											Enter
										</button>
									</td>
								</tr>
								<tr>
									<td
										style={{
											width: "90%",
											overflowY: "scroll",
										}}
									>
										This is a templated version of the
										motion
									</td>
									<td
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<button className="list-enter">
											Enter
										</button>
									</td>
								</tr>
								<tr>
									<td
										style={{
											width: "90%",
											overflowY: "scroll",
										}}
									>
										This is a templated version of the
										motion
									</td>
									<td
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<button className="list-enter">
											Enter
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default List;
