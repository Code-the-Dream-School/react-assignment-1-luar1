import React from 'react';
import Logo from '../images/logo.png';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			gameStarted : false
		};
		this.startGame = this.startGame.bind(this);
	}
	startGame = () => {
		this.props.startGame(this.state);
		this.setState({ gameStarted: true });
	};
	render() {
		let { gameStarted } = this.state;
		return (
			<div>
				{!gameStarted && (
					<header className='center'>
						<img src={Logo} className='logo ' alt='logo' />
						<h1 className='niceFont'>TIC TAC TOE</h1>
						<button onClick={() => this.startGame()} className='btn btn-dark niceFont'>
							Start
						</button>
					</header>
				)}
			</div>
		);
	}
}
export default Header;
