import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import './index.css';
import Layout from './components/layouts';
import SessionCreate from './containers/SessionCreate';
import MasterPanel from './containers/MasterPanel';
import DeveloperPanel from './containers/DeveloperPanel';

const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Route path="/" exact component={SessionCreate} />
        <Route path="/master-panel/:id" exact component={MasterPanel} />
        <Route path="/developer-panel/:id" exact component={DeveloperPanel} />
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
