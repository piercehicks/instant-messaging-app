import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyA83CIiS8nc6I2r_6YSwtOQxK2gIYeLdyk",
    authDomain: "instant-messaging-app-ph.firebaseapp.com",
    databaseURL: "https://instant-messaging-app-ph.firebaseio.com",
    projectId: "instant-messaging-app-ph",
    storageBucket: "instant-messaging-app-ph.appspot.com",
    messagingSenderId: "1034604822536",
    appId: "1:1034604822536:web:009376981eeca2ad9cd1bd",
    measurementId: "G-7SJ56MBYQ2"

});

ReactDOM.render(<div>Hello World</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
