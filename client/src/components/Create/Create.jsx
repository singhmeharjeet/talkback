import React, { createContext } from "react";
import { useState, useContext, useEffect } from "react";
import { getLocalStorage } from "../utils";
import io from 'socket.io-client'
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

    function handleCreate({roomId, children}){
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const socketContext = createContext
        const socket = io('http://localhost:5100')
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
                    <button onClick={handleCreate}>Create Chamber</button>
                </form>
                
            </div>
        </div>
    </>
  )
}

export default Create
