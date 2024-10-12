import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './login.jsx'
import Signup from './signup.jsx'
import { BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA9yYIVKQgJhdb6aHahn0ptDtXJkPvVMo4",
  authDomain: "loginsignupflow-3a802.firebaseapp.com",
  projectId: "loginsignupflow-3a802",
  storageBucket: "loginsignupflow-3a802.appspot.com",
  messagingSenderId: "28732207046",
  appId: "1:28732207046:web:893c4cff3839ff426e0cc7",
  measurementId: "G-VWGE147B8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
