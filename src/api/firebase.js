import * as firebase from 'firebase';
import settings from './settings';

const firebaseApp = firebase.initializeApp(settings);

export const db = firebaseApp.database();
export default firebaseApp;