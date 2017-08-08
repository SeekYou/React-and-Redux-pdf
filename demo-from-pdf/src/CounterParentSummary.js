import React from 'react';
import CounterSummary from './CounterSummary';

const style = {
	margin: '20px'
}

class CounterParentSummary extends React.Component {
	constructor(props) {
		super(props);

		this.initValue = [0,10,20];
		const initSum = this.initValue.reduce((a,b) => a + b, 0)
		this.state = {
			sum: initSum
		}

		this.onCounterUpdate = this.onCounterUpdate.bind(this);
	}

	onCounterUpdate(newValue,previousValue) {
		const valueChange = newValue - previousValue;
		this.setState({
			sum: this.state.sum + valueChange
		})
	}

	render() {
		console.log('enter CounterParentSummary render');
		return (
			<div style={style}>
				<CounterSummary caption="First" onUpdate={this.onCounterUpdate} />
				<CounterSummary caption="Second" onUpdate={this.onCounterUpdate} initValue={this.initValue[1]} />
				<CounterSummary caption="Third" onUpdate={this.onCounterUpdate} initValue={this.initValue[2]} />
				<button onClick={ () => this.forceUpdate() }>Click Me To Re-render</button>
				<div>Total Count: {this.state.sum}</div>
			</div>
		)
	}
}

export default CounterParentSummary;
