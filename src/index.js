/**
 * @Author: Q.S. Wang <qiangswa>
 * @Date:   1970-01-01T10:00:00+10:00
 * @Email:  wangqs_eclipse@yahoo.com
 * @Filename: index.js
 * @Last modified by:   qiangswa
 * @Last modified time: 2017-09-01T15:18:18+10:00
 * @Copyright: Q.S. Wang(wangqs_eclipse@yahoo.com)
 */



import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'

import {routerReducer } from 'react-router-redux'

import * as reducers from './reducers'
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const store = createStore(
  reducer,
  DevTools.instrument()
)

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

//const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);

registerServiceWorker();
