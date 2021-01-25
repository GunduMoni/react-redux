import React, { Component, Fragment } from 'react';
import Home from './components/home.jsx';
import {Provider} from 'react-redux';
import ConfigureStore from './store';

const initialState = {
    studentReducer: {}
};

class App extends Component {
    render() {
        return (
            <Provider store = {ConfigureStore(initialState)}>
                <Home/>
            </Provider>
        );
    }
}

export default App;