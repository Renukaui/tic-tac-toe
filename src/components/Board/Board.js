
import React from "react";
import Square from "../Square/Square";

const Board = props => { 
	const { cells, squares, ...other } 	= props,
		ArrRows = [0,1,2];
	let counter = 1; 

	//Renders React element ...
	return(
		<div className="board"> {
			ArrRows.map((row) =>
				<div key={row.toString()} className="board-row">
					{
						cells.slice(row * 3 , counter++ * 3).map((cellID) =>
							<Square key={cellID.toString()} value={squares[cellID]} onClick={()=>other.onClick(cellID)} />
						)
					} 
				</div>
			)
		}
		</div>
	);
}

export default Board;