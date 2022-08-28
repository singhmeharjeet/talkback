import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../utils";
import "./List.css";

const dataFromDataBase = [
	{
		chamberid: "1",
		title: "Hello",
		url: "1",
		side: "pro",
		owner: "12323id",
	},
	{
		chamberid: "2",
		title: "Hello2",
		url: "2",
		side: "pro",
		owner: "12323id",
	},
	{
		chamberid: "3",
		title: "Hello3",
		url: "3",
		side: "pro",
		owner: "12323id",
	},
	{
		chamberid: "4",
		title: "Hello4",
		url: "4",
		side: "pro",
		owner: "12323id",
	},
	{
		chamberid: "5",
		title: "Hello5",
		url: "5",
		side: "pro",
		owner: "12323id",
	},
	{
		chamberid: "6",
		title: "Hello6",
		url: "6",
		side: "pro",
		owner: "12323id",
	},
];

function Join() {
	const [search, setSearch] = useState("");
	const [filteredData, setFilteredData] = useState(dataFromDataBase);

	useEffect(() => {
		// console.log("search", search);
		// setFilteredData(
		// 	dataFromDataBase.reduce((acc, cv) => {
		// 		if (search && cv.title.includes(search)) {
		// 			acc.push(cv);
		// 		}
		// 	})
		// );
	}, [search]);

	function handleEnter(url) {
		console.log(url);
		return;
	}
	return (
		<>
			<div className="list-wrapper">
				<img className=""></img>
				<div className="AppGlass">
					<h1 className="list-title">
						Hey, {getLocalStorage().username}.<br />
						Join a chamber now!
					</h1>

					<div className="list-search">
						<input
							type="text"
							placeholder="Search Topic..."
							onChange={(e) => {
								setSearch(e.target.value);
							}}
						/>
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
									<th></th>
								</tr>
							</thead>
							<tbody>
								{filteredData.length !== 0 ? (
									filteredData.filter((room) => room.title.toLowerCase().includes(search))
									.map((room, id) => {
										return (
											<tr key={id}>
												<td>{room.title}</td>
												<td>
													<div className="screen-wrapper-button2">
														<button
															onClick={(e) =>
																handleEnter(
																	room.url
																)
															}
															className="list-enter"
														>
															Enter
														</button>
													</div>
												</td>
											</tr>
										);
									})
								) : (
									<tr
										style={{
											padding: "1em",
											display: "flex",
											width: "100%",
											justifyContent: "center",
										}}
									>
										No Rooms to Join
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default Join;
