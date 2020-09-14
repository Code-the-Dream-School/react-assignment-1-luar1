import React from 'react';
import Logo from '../images/logo.png';
import img_0 from '../images/0.png';
import img_X from '../images/1.png';

export default class Info extends React.Component {
	constructor() {
		super();
		this.state = {
			player1         : '',
			player2         : '',
			gameStartedInfo : false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange = (event) => {
		let player = event.target.id;
		this.setState({ [player]: event.target.value });
	};

	handleClick = (event) => {
		event.preventDefault();
		this.props.names(this.state.player1, this.state.player2);
		this.props.startGameInfo(this.state.gameStartedInfo);
		this.setState({
			player1         : '',
			player2         : '',
			gameStartedInfo : true
		});
	};

	render() {
		let { gameStartedInfo } = this.state;
		return (
			<div>
        {!gameStartedInfo && (
          <div>
				<header className='center'>
					<img src={Logo} className='logo ' alt='logo' />
					<h1 className='niceFont'>TIC TAC TOE</h1>
				</header>
					<form>
						<div className='center'>
							<div className='form-row'>
								<div className='form-group col-md-6 niceFont'>
									<label>
										Name <img className='icon' src={img_X} alt='' />
									</label>
									<input
										type='name'
										id='player1'
										className='form-control'
										value={this.state.value}
										onChange={this.handleChange}
									/>
								</div>
								<div className='form-group col-md-6 niceFont'>
									<label>
										Name <img className='icon' src={img_0} alt='' />
									</label>
									<input
										type='name'
										id='player2'
										className='form-control'
										value={this.state.value}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<button className='btn btn-dark niceFont' onClick={this.handleClick}>
								Start Game
							</button>
						</div>
					</form>
          </div>
				)}
			</div>
		);
	}
}
