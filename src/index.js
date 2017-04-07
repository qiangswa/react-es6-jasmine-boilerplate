import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import {browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import {routerReducer } from 'react-router-redux'


import * as reducers from './reducers'
import Root from './containers/Root';

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
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
