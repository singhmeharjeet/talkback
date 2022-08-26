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
							</tbody>
						</table>
					</div>
				</div>
				<div className="AppGlass" style={{ height: "auto" }}>
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
