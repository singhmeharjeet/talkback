import React from "react";
import { getLocalStorage } from "../utils";
import "./List.css";

function Join() {
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
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										This is a templated version of the
										motion
									</td>
									<td>
										<div className="screen-wrapper-button2">
											<button className="list-enter">
												Enter
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										This is a templated version of the
										motion
									</td>
									<td>
										<div className="screen-wrapper-button2">
											<button className="list-enter">
												Enter
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										This is a templated version of the
										motion
									</td>
									<td>
										<div className="screen-wrapper-button2">
											<button className="list-enter">
												Enter
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										This is a templated version of the
										motion
									</td>
									<td>
										<div className="screen-wrapper-button2">
											<button className="list-enter">
												Enter
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										This is a templated version of the
										motion
									</td>
									<td>
										<div className="screen-wrapper-button2">
											<button className="list-enter">
												Enter
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										This is a templated version of the
										motion
									</td>
									<td>
										<div className="screen-wrapper-button2">
											<button className="list-enter">
												Enter
											</button>
										</div>
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

export default Join;
