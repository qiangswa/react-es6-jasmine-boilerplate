/**
 * @Author: Q.S. Wang <qiangswa>
 * @Date:   1970-01-01T10:00:00+10:00
 * @Email:  wangqs_eclipse@yahoo.com
 * @Filename: Root.dev.js
 * @Last modified by:   qiangswa
 * @Last modified time: 2017-09-01T14:46:12+10:00
 * @Copyright: Q.S. Wang(wangqs_eclipse@yahoo.com)
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import DevTools from './DevTools';
import { Route, Switch} from 'react-router'
import {App, Foo, Bar} from '../components'
import { ConnectedRouter} from 'react-router-redux'

export default class Root extends Component {
    render() {
        const {store} = this.props;
        const {history} = this.props;

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                  <div>
                    <div>
                      <Switch>
                           <Route exact path='/' component={App} />
                           <Route path='/foo' component={Foo} />
                           <Route path='/bar' component={Bar} />
                       </Switch>
                    </div>
                    <DevTools/>
                  </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}
