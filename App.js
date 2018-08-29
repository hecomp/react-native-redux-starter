import React, {Component} from 'react';
import config from './src/firebase'
import firebase from 'firebase'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import AppNavigator from './src/navigation/AppNavigator'

const loggerMiddleware = createLogger()
let store = createStore(reducers, applyMiddleware(thunk, loggerMiddleware))

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp(config)
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
