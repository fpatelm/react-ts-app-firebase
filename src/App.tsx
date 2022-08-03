import React from 'react';
import './App.scss';
import HelloWorld from './components/HelloWorld/HelloWorld';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as firebase from 'firebase/app';
import * as auth from 'firebase/auth';
import * as firestore from 'firebase/firestore';
import * as storage from 'firebase/storage';
import * as analytics from 'firebase/analytics';
import * as functions from 'firebase/functions';

initializeApp(firebaseConfig);


const storageApp = storage.getStorage(firebase.getApp());
const authApp = auth.getAuth(firebase.getApp());
const firestoreApp = firestore.getFirestore(firebase.getApp());
const functionsApp = functions.getFunctions(firebase.getApp());

// eslint-disable-next-line no-restricted-globals
if (location.hostname === 'locahost') { 
  firestore.connectFirestoreEmulator(firestoreApp, 'localhost', 8080);
  auth.connectAuthEmulator(authApp, 'localhost:8040');
  storage.connectStorageEmulator(storageApp, 'localhost', 8080);
  functions.connectFunctionsEmulator(functionsApp,'localhost', 8080);
}

export interface IApplicationProps { };

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< HelloWorld />} />
      </Routes>
    </BrowserRouter >
  );
};

export default Application;
