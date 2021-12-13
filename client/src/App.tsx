import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {bindActionCreators} from 'redux';

import {store} from './redux'
import { actionCreators, State } from './redux';

import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import ForgetPassword from './Pages/ForgetPassword';
import Dashboard from './Pages/Dashboard';
import Shipments from './Pages/Shipments';

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/shipments' element={<Shipments/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='reset-password' element={<ForgetPassword />} />
      
        </Routes>
      </Router>
  );
}

export default App;
