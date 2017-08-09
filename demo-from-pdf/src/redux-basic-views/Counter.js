import React from 'react';
import store from '../redux-basic/Store';
import * as Actions from '../redux-basic/Actions';
import PropTypes from 'prop-types';

const buttonStyle = {
	margin: '10px'
}

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.getOwnState();

		this.getOwnState = this.getOwnState.bind(this);
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);
		this.onChange = this.onChange.bind(this);

	}

	getOwnState() {
		return {
			value: store.getState()[this.props.caption]
		}
	}

	onIncrement() {
		store.dispatch(Actions.increment(this.props.caption));
	}

	onDecrement() {
		store.dispatch(Actions.decrement(this.props.caption));
	}

	onChange() {
		this.setState(this.getOwnState())
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value)
	}

	componentDidMount() {
		store.subscribe(this.onChange)
	}

	componentWillUnmount() {
		store.unsubscribe(this.onChange)
	}

	render() {
		const value = this.state.value;
		const {caption} = this.props;
		return (
			<div>
				<button style={buttonStyle} onClick={this.onIncrement} >+</button>
				<button style={buttonStyle} onClick={this.onDecrement} >-</button>
				<span>{caption} count: {value}</span>
			</div>
		)
	}
}

Counter.propTypes = {
	caption: PropTypes.string.isRequired
}

export default Counter;
