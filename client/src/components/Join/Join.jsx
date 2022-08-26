import React from "react";
import "./Join.css";

function Join() {
  const handleJoin = (e) => {
    console.log("func called");
		/**
		 * TODO: (1) generate uuid (2) store info in local storage (3) navigate to all rooms page
		 */
	};
	return (
		<>
			<div className="screen-wrapper">
				<div className="screen-wrapper-title">
					Welcome to <br style={{ width: "0" }} /> TalkBack
				</div>
				{/* <div className="screen-wrapper-sub-title">Find the debate of your choice</div> */}
				<div className="screen-wrapper-input">
					<input
						type="text"
						placeholder="Enter your name"
						required
						autoFocus
						onKeyDown={(e) =>
							e.key == "Enter" ? handleJoin() : null
						}
					/>
				</div>
				<div className="screen-wrapper-button">
					<button type="button" onClick={handleJoin}>
						Join Debate
					</button>
				</div>
			</div>
		</>
	);
}

export default Join;
