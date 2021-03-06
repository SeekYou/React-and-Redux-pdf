import React from 'react';
import * as Actions from '../redux-basic/Actions';
import PropTypes from 'prop-types';

const buttonStyle = {
	margin: '10px'
}

class Counter extends React.Component {
	render() {
		const {caption,onIncrement,onDecrement,value} = this.props;
		return (
			<div>
				<button style={buttonStyle} onClick={onIncrement} >+</button>
				<button style={buttonStyle} onClick={onDecrement} >-</button>
				<span>{caption} count: {value}</span>
			</div>			
		)
	}
}

Counter.propTypes = {
	caption: PropTypes.string.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired
}

class CounterContainer extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.state = this.getOwnState();

		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);
		this.onChange = this.onChange.bind(this);
		this.getOwnState = this.getOwnState.bind(this);

	}

	getOwnState() {
		return {
			value: this.context.store.getState()[this.props.caption]
		}
	}

	onIncrement() {
		this.context.store.dispatch(Actions.increment(this.props.caption));
	}

	onDecrement() {
		this.context.store.dispatch(Actions.decrement(this.props.caption));
	}

	onChange() {
		this.setState(this.getOwnState());
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (nextProps.caption !== this.props.caption) ||
      (nextState.value !== this.state.value);
	}

	componentDidMount() {
		this.context.store.subscribe(this.onChange)
	}

	componentWillUnmount() {
		this.context.store.unsubscribe(this.onChange)
	}

	render() {
		return <Counter caption={this.props.caption} onIncrement={this.onIncrement} onDecrement={this.onDecrement} value={this.state.value} />
	}
}

CounterContainer.propTypes = {
	caption: PropTypes.string.isRequired
}

CounterContainer.contextTypes = {
	store: PropTypes.object
}

export default CounterContainer;
