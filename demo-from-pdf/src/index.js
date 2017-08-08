import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//自己添加的组件
import ClickCounter from './ClickCounter';
import CounterParent from './CounterParent';

// import CounterParentSummary from './CounterParentSummary';
import CounterSummaryParent from './views/CounterParent';





// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
// 	<ClickCounter />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<CounterParent />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<CounterParentSummary />,
// 	document.getElementById('root')
// )

ReactDOM.render(
	<CounterSummaryParent />,
	document.getElementById('root')
)


registerServiceWorker();
