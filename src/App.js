import React, { Component } from 'react';
import { createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import hanldeNewMessages from './sagas';
import setupSocket from './sockets';
import username from './utils/name';

/* COMPONENTS */
import Sidebar from './components/Sidebar';
import MessageList  from './components/MessageList';
import AddMessage from './components/AddMessage';

import { Provider } from 'react-redux';

/* STYLES */
import './App.css';

/* STORE SETUP WITH MIDDLEWARE */
const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

/* SOCKET SETUP */
const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(hanldeNewMessages, {socket, username});

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="app">
          <Sidebar />
          <section className="messages-area">
            <MessageList />
            <AddMessage />
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
