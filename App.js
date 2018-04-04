console.log('App is working.');
import React , { Component } from 'react';
import { 
    Text,
    StyleSheet, 
} from 'react-native';

import Routes from './src/component/Routes';
import Firebase from 'firebase';

export default class App extends Component {
    componentWillMount() {
        Firebase.initializeApp({
            apiKey: "AIzaSyDDO8nnwdZ5j7DvSG4l1bNW3ocd67jDQ94",
            authDomain: "testclass-e39df.firebaseapp.com",
            databaseURL: "https://testclass-e39df.firebaseio.com",
            projectId: "testclass-e39df",
            storageBucket: "testclass-e39df.appspot.com",
            messagingSenderId: "800363021867"
        })
    }
    render() {
        return (
            <Routes/>
        );
    }
}

