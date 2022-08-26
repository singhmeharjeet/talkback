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
        <div className="list-wrapper">
            <div className="AppGlass" style={{ height: "auto" }}>
                <h1 className="list-title">Create Chambers!</h1>
                <form onSubmit={onSubmit}>
                    <div className="list-search">
                            <input onChange={onChange} name="motion" value={motion} type="text" placeholder="Type your motion here..." />
                    </div>
                    <div className="position-buttons">
                        <label>
                        <input 
                            type="radio"
                            name="position-radio-btn"
                            value="Opposition"
                            // checked={isRadioSelected("Opposition")}
                            // onChange={handleRadioClick}
                        />Opposition
                        </label>
                        <label>
                        <input 
                            type="radio"
                            name="position-radio-btn"
                            value="Affirmative"
                            // checked={isRadioSelected("Affirmative")}
                            // onChange={handleRadioClick}
                        />Affirmative
                        </label>
                        
					</div>
                    <button>Create Chamber</button>
                </form>
                
            </div>
        </div>
    </>
  )
}

export default Create
