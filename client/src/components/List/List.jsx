import React from "react";
import "./List.css";

function Join() {
	return (
		<>
			<div className="list-wrapper">
				<div className="AppGlass">
					<h1 className="list-title">Join a chamber now!</h1>

					<div className="list-search">
						<input type="text" placeholder="Search Topic..." />
					</div>

					<div className="list-create-chamber">
						<button>Create My Own Chamber</button>
					</div>

					<div className="list-motion-table">
						<table>
							<thead>
								<tr>
									<th>Chamber(s) Available</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td></td>
									<td>
										<button className="list-enter">Enter</button>
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
