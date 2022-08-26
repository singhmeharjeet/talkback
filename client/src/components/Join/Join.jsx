import React, {useState} from "react";
import { useNavigate } from  "react-router-dom";
import {v4 as uuid} from "uuid";
import { setLocalStorage, getLocalStorage } from "../utils";
import "./Join.css";

function Join() {
  const navigate = useNavigate();
  const[userid, setuserid] = useState(uuid());
  const[username, setusername] = useState('');
  const[errormsg, seterrormsg] = useState('');

  const handleJoin = (e) => {
	console.log(userid);
	console.log(username);
		/**
		 * (2) store info in local storage 
		 * - user id
		 * - username
		 * 
		 * (3) navigate to all rooms page (add if statement) if name is empty do not 
		 * navigate
		 */
		if(username){
			setLocalStorage({userid, username});
			console.log(getLocalStorage())
			navigate("/list");
		}else{
			seterrormsg('Name is Required!');
			setTimeout( () => seterrormsg(''), 3000 );
		}
		
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
						id = "name"
						type="text"
						placeholder="Enter your name"
						value = {username}
						required
						autoFocus
						onChange={(e) => {setusername(e.target.value)}}
						onKeyDown={(e) =>
							e.key == "Enter" ? handleJoin() : null
						}
					/>
					{errormsg ? <p className="errormsg-home"> {errormsg}</p> : null}
				</div>
				<div className="screen-wrapper-button">
					<button type="button" onClick= {handleJoin} >
						Join Debate
					</button>
				</div>
			</div>
		</>
	);
}

export default Join;
