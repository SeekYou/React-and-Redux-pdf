import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//自己添加的组件
// import ClickCounter from './ClickCounter';
// import CounterParent from './CounterParent';

// // import CounterParentSummary from './CounterParentSummary';
// import CounterSummaryParent from './views/CounterParent';
// import ControlPanel from './redux-basic-views/ControlPanel';
// import ControlPanelSmartDumb from './redux-smart-dumb-views/ControlPanel';

// import store from './redux-basic/Store';
// import Provider from './redux-with-context/Provider';
// import ControlPanel from './redux-with-context/ControlPanel';

import {Provider} from 'react-redux';
import store from './redux-basic/Store';
import ControlPanel from './react-redux-views/ControlPanel';










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

// ReactDOM.render(
// 	<CounterSummaryParent />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<ControlPanel />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<ControlPanelSmartDumb />,
// 	document.getElementById('root')
// )

ReactDOM.render(
	<Provider store={store}><ControlPanel /></Provider>,
	document.getElementById('root')
)


registerServiceWorker();
