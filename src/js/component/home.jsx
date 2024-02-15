import React, { useState } from "react";
import { useEffect } from 'react';

//create your first component

const LightBall = (props) =>{
	return (
		<div className={`light-ball ${props.lightBallColor} ${props.shine}`} onClick={props.handleClick}></div>
	)
}

const Home = () => {
	const [color, setColor] = useState("red");
	const [auto, setAuto] = useState(false)

	useEffect(()=>{
		if(auto){
			if(color === "red"){
				setTimeout(()=>{
					setColor("green")
				}, 6000)
			}
			else if(color === "green"){
				setTimeout(()=>{
					setColor("yellow")
				}, 5000)
			}
			else if(color === "yellow"){
				setTimeout(()=>{
					setColor("red")
				}, 3000)
			}
		}
	},[color, auto])

	return (
		<>
			<div className="support"></div>
			<div className="traffic-light">
				<LightBall 
					lightBallColor="red"
					shine={color === "red" ? "shineRed" : undefined}
					handleClick={()=> auto ? undefined : setColor("red")}
				/>
				<LightBall 
					lightBallColor="yellow"
					shine={color === "yellow" ? "shineYellow" : undefined}
					handleClick={()=> auto ? undefined : setColor("yellow")}
				/>
				<LightBall 
					lightBallColor="green" 
					shine={color === "green" ? "shineGreen" : undefined} 
					handleClick={()=> auto ? undefined : setColor("green")}
				/>
			</div>
			{!auto && <button onClick={()=> setAuto(true)}>Automatico</button>}
			{auto && <button onClick={()=> setAuto(false)}>Manual</button>}

		</>
	);
};

export default Home;
