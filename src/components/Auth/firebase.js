import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBrFrkL6xHuUqLZs5uE2zlMgHFModT5aW0',
  authDomain: 'gwsportfolio-22107.firebaseapp.com',
  databaseURL: 'https://gwsportfolio-22107-default-rtdb.firebaseio.com',
  projectId: 'gwsportfolio-22107',
  storageBucket: 'gwsportfolio-22107.appspot.com',
  messagingSenderId: '252850825468',
  appId: '1:252850825468:web:8869404ba1e2c272f1cf79',
  measurementId: 'G-KBRYKCTHH1'
};

const app = initializeApp(config)
const auth = getAuth(app)

export {auth}