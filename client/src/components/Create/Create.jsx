import React from "react";
import { getLocalStorage } from "../utils";
import "./Create.css";

function Create() {
  return (
    <>
        <div className="list-wrapper">
            <div className="AppGlass" style={{ height: "auto" }}>
                <h1 className="list-title">Create Chambers!</h1>
                <div className="list-search">
						<input type="text" placeholder="Search Topic..." />
				</div>
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
  )
}

export default Create
