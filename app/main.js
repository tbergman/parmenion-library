import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { ThemeProvider, injectGlobal } from 'styled-components';
import theme from 'theme';

import * as reducers from './reducers';
import { App, Home, Foo, Bar } from './containers';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>,
);

const store = createStore(
  reducer,
  DevTools.instrument(),
);
const history = syncHistoryWithStore(browserHistory, store);

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  html {
    font-size: ${theme.components.base_size};
  }
  body {
    margin: ${theme.layout.push(2)};
    font-size: ${theme.type.size};
    font-family: ${theme.type.font};
    line-height: ${theme.layout.push(2)};
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="foo" component={Foo} />
            <Route path="bar" component={Bar} />
          </Route>
        </Router>
        <DevTools />
      </div>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
