import React from 'react';
import Logo from '../images/logo.png';

const Header = () => {
	return (
		<div>
			<header className='center'>
				<img src={Logo} className='logo ' alt='logo' />
				<h1 className='niceFont'>TIC TAC TOE</h1>
				<button onClick={() => alert('this works!')} class='btn btn-dark niceFont'>
					Start
				</button>
			</header>
		</div>
	);
};

export default Header;
