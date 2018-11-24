import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './components/redux/reducer/rootReducer'
import thunk from 'redux-thunk'
import {reduxFirestore, getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import config from './config/configFirebase'
const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(config),
        reactReduxFirebase(config, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
    )
);
store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
    registerServiceWorker();
})

        