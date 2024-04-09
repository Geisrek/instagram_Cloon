import logo from './logo.svg';
import Signin from './components/Signin/Signin';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Home from './components/Home/Home';
import Signup from './components/signup/Signup';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='profile' element={<Profile/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='signin' element={<Signin/>}/>
    <Route path='Signup' element={<Signup/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
