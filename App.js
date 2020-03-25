import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './routes/drawer'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './services/reducer';
import thunkMiddleware from 'redux-thunk'

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware))

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
