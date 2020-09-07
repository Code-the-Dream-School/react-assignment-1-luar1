import React from 'react';
import Header from './Header';
import img_0 from '../images/0.png';
import img_X from '../images/1.png';

export default class Info extends React.Component {
	constructor() {
		super();
		this.state = {
			player1 : '',
			player2 : ''
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
		this.setState({
			player1 : '',
			player2 : ''
		});
	};
	render() {
		return (
			<div>
				<Header />
				<form>
					<div class='center'>
						<div class='form-row'>
							<div class='form-group col-md-6 niceFont'>
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
							<div class='form-group col-md-6 niceFont'>
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
						<button class='btn btn-dark niceFont' onClick={this.handleClick}>
							Start Game
						</button>
					</div>
				</form>
			</div>
		);
	}
}
