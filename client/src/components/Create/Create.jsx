import React from "react";
import { useState } from "react";
import { getLocalStorage } from "../utils";
import "./Create.css";

function Create() {
    const [motion, setMotion] = useState('');

    const onChange = (e) => {
        const { value } = e.target;

        setMotion(value); 
    }

    const showData = () => {
        console.log('Motion: ', motion);
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <>
        <div className="create-wrapper">
            <div className="AppGlass" style={{ height: "auto", overflowY:"hidden", width: "auto", padding: "1em"}}>
                <h1 className="create-title">Create Chambers!</h1>
                <form className="motion-form" onSubmit={onSubmit}>
                    <div className="create-motion">
                            <input onChange={onChange} name="motion" value={motion} type="text" placeholder="Type your motion here..." />
                    </div>
                    <div className="position-buttons">
                        <label className="Opp-btn">
                        <input 
                            type="radio"
                            name="position-radio-btn"
                            value="Opposition"
                            // checked={isRadioSelected("Opposition")}
                            // onChange={handleRadioClick}
                        />Opposition
                        </label>
                        <label className="Aff-btn">
                        <input 
                            type="radio"
                            name="position-radio-btn"
                            value="Affirmative"
                            // checked={isRadioSelected("Affirmative")}
                            // onChange={handleRadioClick}
                        />Affirmative
                        </label>
					</div>
                    <div className="create-btn-wrapper">
                    <button className="Create-btn">Create Chamber</button>
                    </div>
                </form>
                
            </div>
        </div>
    </>
  )
}

export default Create
