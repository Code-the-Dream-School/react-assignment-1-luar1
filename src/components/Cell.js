import React from 'react';
import img_0 from '../images/0.png';
import img_X from '../images/1.png';

class Cell extends React.Component {
	render() {
		return (
			<button className='square btn btn-outline-dark' onClick={() => this.props.onClick()}>
				{this.props.value === 'X' ? (
					<img className='icon' src={img_X} alt='' />
				) : this.props.value === 'O' ? (
					<img className='icon' src={img_0} alt='' />
				) : null}
			</button>
		);
	}
}
export default Cell;
