import React from 'react';
import './App.scss';
import HelloWorld from './components/HelloWorld/HelloWorld';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as firebase from 'firebase/app';
import { addDoc, collection, connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

var app = initializeApp(firebaseConfig);
var db = getFirestore(app);
var auth = getAuth(app);
var store = getStorage(app);
var func = getFunctions(app);

//Add a sample data into testabc collection
var col = collection(db, 'testabc');

addDoc(col, {name:'test'});

// eslint-disable-next-line no-restricted-globals
if (location.hostname === 'locahost') { 
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectAuthEmulator(auth, 'localhost:8040');
  connectStorageEmulator(store, 'localhost', 8081);
  connectFunctionsEmulator(func,'localhost', 8082);
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
