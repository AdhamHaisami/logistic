import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import ForgetPassword from './Pages/ForgetPassword';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='reset-password' element={<ForgetPassword />} />
    
      </Routes>
    </Router>
  );
}

export default App;