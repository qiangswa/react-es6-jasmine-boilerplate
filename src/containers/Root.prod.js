import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { App, Home, Foo, Bar } from '../components'


export default class Root extends Component {
  render() {
    const { store } = this.props;
    const {history} = this.props;
    
    return (
      <Provider store={store}>
      <div>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="foo" component={Foo}/>
            <Route path="bar" component={Bar}/>
          </Route>
        </Router>
      </div>
    </Provider>
    );
  }
}
