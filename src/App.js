import React, { Component } from 'react';
import Board from "./components/Board/Board";
import Moves from "./components/Moves/Moves";
import Status from "./components/Status/Status";
import calculateWinner from "./UtilityFunctions/calculateWinner";
import './App.css';

class Game extends Component {
	constructor(props){
		super(props);
		this.state = {
			history: [{ 
				squares:Array(9).fill(null), 
				clickIndex:null  
			}],
			xIsNext: true,
      stepNumber: 0,
      isTie: false
		};
	}

	handleClick = (i) => {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if(squares[i] || calculateWinner(squares)) {
			return;
    }
    squares[i] = this.state.xIsNext ? 'x':'o';
    const checkGameEnd = squares.filter(i => i === null);
    if (!checkGameEnd.length) {
      this.setState({
        history: history.concat([{ squares:squares, clickIndex:i }]),
            stepNumber	: history.length,
        isTie: !this.state.isTie
      })
    } else {
      this.setState({
        history: history.concat([{ squares:squares, clickIndex:i }]),
            stepNumber	: history.length,
        xIsNext: !this.state.xIsNext,
        isTie: this.state.isTie
      });
    }
	}

	jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      isTie: !this.state.isTie
    });
	}
	
	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const squares = current.squares.slice();

		return(
			<div className="game">
				<div className="game-board">
					<Board squares={squares} onClick={this.handleClick} cells={[0,1,2,3,4,5,6,7,8]} />
				</div>
				<div className="game-info">
					<Status squares={ squares } xIsNext={ this.state.xIsNext } isTie={this.state.isTie}/>
					<Moves history={ this.state.history } stepNumber={ this.state.stepNumber } onClick={this.jumpTo} /> 
				</div>
			</div>
		);
	}
}

export default Game;
