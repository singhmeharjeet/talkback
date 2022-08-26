import React from "react";
import "./Join.css";

function Join() {
	return(
		<>
		
		<div className="TitleContent">
			<div className="AppGlass">	
				<h1 className="Title">Join a chamber now!</h1>

				<div className="Search">
					<input type="text" placeholder="Search Topic..." />
				</div>

				<div className="CreateChamber">
					<button>Create My Own Chamber</button>
				</div>

				<div className="MotionTable">
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
									<button>Join</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		</>
	)

}

export default Join;
