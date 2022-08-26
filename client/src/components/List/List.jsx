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

					{/* <div className="list-create-chamber">
						<button>Create My Own Chamber</button>
					</div> */}

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
										<button className="list-enter">
											Enter
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="AppGlass">
					<h1 className="list-title">Create Chambers!</h1>
					<input type="text" />
					<input 
						type="radio"
						name="position-radio-btn"
						value="Opposition"
						// checked={isRadioSelected("Opposition")}
						// onChange={handleRadioClick}
					/>
					<input 
						type="radio"
						name="position-radio-btn"
						value="Affirmative"
						// checked={isRadioSelected("Affirmative")}
						// onChange={handleRadioClick}
					/>
				</div>
			</div>
		</>
	);
}

export default Join;
