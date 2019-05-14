import React from "react";

const Moves = props => {
	const { history, stepNumber, ...other } = props;
	const moves = history.map((step,move) => {
		let desc = move ? 'Move to Step #'+move+' ' : 'Go to game start';
		const btn_highlight = (stepNumber === move)?'btn-primary':'btn-secondary';
		return(
			<li key={move}>
	          	<button className={"btn "+btn_highlight+" btn-block"} 
	            onClick={()=> other.onClick(move) }>{desc}</button>
	        </li>
		);
	});
	
	return(
		<div className="game-info__moves">
			<ol className="list-moves list-unstyled">
				{moves}
			</ol>
		</div>
	);
}

export default Moves;