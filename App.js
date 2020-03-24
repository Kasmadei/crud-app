import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './routes/drawer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './services/reducer';

const store = createStore(mainReducer)

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
