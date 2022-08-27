import React from "react";
import { useState, useContext, useEffect } from "react";
import { getLocalStorage } from "../utils";
import io from 'socket.io-client'
import {v4 as uuidv4} from "uuid";
import "./Create.css";


function Create({socket}) {
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

    function handleCreate(){
        // eslint-disable-next-line react-hooks/rules-of-hooks
        console.log(socket) 
        socket.emit('join-room',socket) // 2nd for room id and 3rd for user name
        
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
                    <button className="Create-btn" onClick={handleCreate}>Create Chamber</button>
                    </div>
                </form>
                
            </div>
        </div>
    </>
  )
}

export default Create
