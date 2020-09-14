import React from "react";
import Cell from "./Cell";
import Info from "./Info";
import img_0 from "../images/0.png";
import img_X from "../images/1.png";
import Header from "./Header";
import Logo from '../images/logo.png';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      gameStartedInfo: false,
      isReset: false,
      squares: Array(9).fill(null),
      xIsNext: true,
      player1: "",
      player2: "",
      namePlayerOne: "",
      namePlayerTwo: "",
    };
    this.handleInfo = this.handleInfo.bind(this);
  }
  handleInfo(player1, player2) {
    this.setState({
      namePlayerOne: player1,
      namePlayerTwo: player2,
    });
  }
  handleStartGame = () => {
    console.log("game has started");
    this.setState({ gameStarted: true });
  };
  handleStartGameInfo = () => {
    console.log("Hide Info");
    this.setState({ gameStartedInfo: true });
  };
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  handleReset() {
    this.setState({
      isReset: true,
	  gameStarted: true,
	  gameStartedInfo: true,
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  }
  handleNew(e) {
    this.setState({
      isReset: false,
      gameStarted: false,
      gameStartedInfo: false,
      squares: [],
      xIsNext: true,
      player1: "",
      player2: "",
      namePlayerOne: "",
      namePlayerTwo: "",
    });
  }
  renderSquare(i) {
    return (
      <Cell value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    );
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner === "X") {
      status = this.state.namePlayerOne + "  Wins! with ";
      return (
        <div className="game">
          <header className="center">
            <img src={Logo} className="logo " alt="logo" />
            <h1 className="niceFont">TIC TAC TOE</h1>
          </header>
          <div>
            <div className="alert alert-info" role="alert">
              <div className="center">
                <h1 className="niceFont">
                  {status}
                  <img className="icon" src={img_X} alt="" />
                </h1>
              </div>
              <div className="together">
                <button
                  className="btn btn-dark niceFont"
                  onClick={() => this.handleNew()}
                >
                  New Game
                </button>
                <button
                  className="btn btn-dark niceFont"
                  onClick={() => this.handleReset()}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (winner === "O") {
      status = this.state.namePlayerOne + "  Wins! with ";
      return (
        <div className="game">
          <header className="center">
            <img src={Logo} className="logo " alt="logo" />
            <h1 className="niceFont">TIC TAC TOE</h1>
          </header>
          <div className="alert alert-info" role="alert">
            <div className="center">
              <h1 className="niceFont">
                {status}
                <img className="icon" src={img_0} alt="" />
              </h1>
            </div>
            <div className="together">
              <button
                className="btn btn-dark niceFont"
                onClick={() => this.handleNew()}
              >
                New Game
              </button>
              <button
                className="btn btn-dark niceFont"
                onClick={() => this.handleReset()}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      status =
        "Player: " +
        (this.state.xIsNext
          ? this.state.namePlayerOne
          : this.state.namePlayerTwo);
    }
    return (
      <div className="game">
        {!this.state.isReset && <Header startGame={this.handleStartGame} />}
        {this.state.gameStarted && !this.state.isReset && (
          <div>
            <Info
              names={this.handleInfo}
              startGameInfo={this.handleStartGameInfo}
            />
          </div>
        )}
        {this.state.gameStartedInfo && (
          <div>
            <header className="center">
              <img src={Logo} className="logo " alt="logo" />
              <h1 className="niceFont">TIC TAC TOE</h1>
            </header>
            <div className="together">
              <p className="niceFont">
                <img className="icon" src={img_X} alt="" />
                {this.state.namePlayerOne}
              </p>
              <p className="niceFont">
                <img className="icon" src={img_0} alt="" />
                {this.state.namePlayerTwo}
              </p>
            </div>
            <div className="board">
              <div className="row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
            <div className="together">
              <button
                className="btn btn-dark niceFont"
                onClick={() => this.handleNew()}
              >
                New Game
              </button>
              <button
                className="btn btn-dark niceFont"
                onClick={() => this.handleReset()}
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default Board;