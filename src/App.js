import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import configureStore from './store';
import Landing from './pages/Landing';

const { store, dispatch } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyles />
        <Router dispatch={dispatch} store={store}>
          <Switch>
            <Route path="/" exact component={Landing} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
