import React from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

const style = {
  margin: '20px'
};

class ControlPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}

	}

	render() {
		return (
			<div style={style}>
				<Counter caption='First' />
				<Counter caption='Second' />
				<Counter caption='Third' />
				<Summary />
			</div>
		)
	}
}

export default ControlPanel;
