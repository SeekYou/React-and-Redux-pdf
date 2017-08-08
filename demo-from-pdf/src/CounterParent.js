import React from 'react';
import Counter from './Counter';

const style = {
	margin: '20px'
}

class CounterParent extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {

	// 	}

	// }

	render() {
		console.log('enter CounterParent render');
		return (
			<div style={style}>
				<Counter caption="First" />
				<Counter caption="Second" initValue={10} />
				<Counter caption="Third" initValue={20} />
				<button onClick={ () => this.forceUpdate() }>Click Me To Re-render</button>
			</div>
		)
	}
}

export default CounterParent;
