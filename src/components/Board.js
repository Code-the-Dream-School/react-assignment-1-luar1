import React from 'react';
import Cell from './Cell';
import Info from './Info';
import img_0 from '../images/0.png';
import img_X from '../images/1.png';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares       : Array(9).fill(null),
			xIsNext       : true,
			player1       : '',
			player2       : '',
			namePlayerOne : '',
			namePlayerTwo : ''
		};
		this.handleInfo = this.handleInfo.bind(this);
	}
	handleInfo(player1, player2) {
		this.setState({
			namePlayerOne : player1,
			namePlayerTwo : player2
		});
	}

	handleClick(i) {
		const squares = this.state.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			squares : squares,
			xIsNext : !this.state.xIsNext
		});
	}

	handleReset() {
		this.setState({
			squares : [],
			xIsNext : true
		});
	}

	handleNew(event) {
		this.setState({
			squares : [],
			xIsNext : true,
			player1 : '',
			player2 : ''
		});
	}
	renderSquare(i) {
		return <Cell value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
	}

	render() {
		const winner = calculateWinner(this.state.squares);
		let status;
		if (winner === 'X') {
			status = this.state.namePlayerOne + '  Wins! with ';
			return (
				<div class='game'>
					<div class='alert alert-info' role='alert'>
						<div class='center'>
							<h1 class='niceFont'>
								{status}
								<img class='icon' src={img_X} alt='' />
							</h1>
						</div>
						<div class='together'>
							<button class='btn btn-dark niceFont' onClick={() => this.handleNew()}>
								New Game
							</button>
							<button class='btn btn-dark niceFont' onClick={() => this.handleReset()}>
								Reset
							</button>
						</div>
					</div>
				</div>
			);
		} else if (winner === 'O') {
			status = this.state.namePlayerOne + '  Wins! with ';
			return (
				<div class='game'>
					<div class='alert alert-info' role='alert'>
						<div class='center'>
							<h1 class='niceFont'>
								{status}
								<img class='icon' src={img_0} alt='' />
							</h1>
						</div>
						<div class='together'>
							<button class='btn btn-dark niceFont' onClick={() => this.handleNew()}>
								New Game
							</button>
							<button class='btn btn-dark niceFont' onClick={() => this.handleReset()}>
								Reset
							</button>
						</div>
					</div>
				</div>
			);
		} else {
			status = 'Player: ' + (this.state.xIsNext ? this.state.namePlayerOne : this.state.namePlayerTwo);
		}

		return (
			<div class='game'>
				<Info names={this.handleInfo} />
				<div class='together'>
					<p class='niceFont'>
						{this.state.namePlayerOne}
						<img class='icon' src={img_X} alt='' />
					</p>
					<p class='niceFont'>
						{this.state.namePlayerTwo}
						<img class='icon' src={img_0} alt='' />
					</p>
				</div>
				<div class='board'>
					<div class='row'>
						{this.renderSquare(0)}
						{this.renderSquare(1)}
						{this.renderSquare(2)}
					</div>
					<div class='row'>
						{this.renderSquare(3)}
						{this.renderSquare(4)}
						{this.renderSquare(5)}
					</div>
					<div class='row'>
						{this.renderSquare(6)}
						{this.renderSquare(7)}
						{this.renderSquare(8)}
					</div>
				</div>
				<div class='together'>
					<button class='btn btn-dark niceFont' onClick={() => this.handleNew()}>
						New Game
					</button>
					<button class='btn btn-dark niceFont' onClick={() => this.handleReset()}>
						Reset
					</button>
				</div>
			</div>
		);
	}
}

function calculateWinner(squares) {
	const lines = [
		[ 0, 1, 2 ],
		[ 3, 4, 5 ],
		[ 6, 7, 8 ],
		[ 0, 3, 6 ],
		[ 1, 4, 7 ],
		[ 2, 5, 8 ],
		[ 0, 4, 8 ],
		[ 2, 4, 6 ]
	];
	for (let i = 0; i < lines.length; i++) {
		const [ a, b, c ] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
export default Board;
