import React from "react";
import calculateWinner from "../../UtilityFunctions/calculateWinner";

const Status = props => {
	const { squares, xIsNext, isTie } = props,
		winner = calculateWinner(squares),
		effect = winner?'bounce':''; 
	let status;  

	if (winner) {
		status = 'Winner is: '+ winner;
	} else  if (isTie) {
		status = "Match is a Tie";
	} else {
		status = 'Next player is: '+ (xIsNext?'x':'o');
	}
	
	return(
		<div className="game-info__status">
			<div className={'status '+effect}>{status}</div>
  		</div>
	); 
}

export default Status;