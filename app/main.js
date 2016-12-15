import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
    
import { ThemeProvider } from 'styled-components';
import theme from 'library/theme/index.js';

import * as reducers from './reducers'
import { App, Home, Foo, Bar } from './containers'

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

//export const theme = {
//  primary:   "#BF2A23",
//  success:   "#91c95b",
//  danger:    "#BF2A23",
//  info:      "#5bc0de",
//  warning:   "#f0ad4e",
//  default:   "#666666"
//};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="foo" component={Foo}/>
            <Route path="bar" component={Bar}/>
          </Route>
        </Router>
        <DevTools />
      </div>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)