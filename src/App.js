import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//components aka pages. 
import Booked from './pages/Booked';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';

import './App.css';

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Explore/>}/>
      <Route path='/booked' element={<Booked/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/userprofile' element={<UserProfile/>}/>
    </Routes>
  </Router>
  {/* NavBar */}
  </>
  );
}

export default App;
