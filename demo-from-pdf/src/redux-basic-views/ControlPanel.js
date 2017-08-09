import React from 'react';
import Counter from './Counter';
import Summary from './Summary';

const style = {
	margin: '20px'
}

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
