import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Home from './components/Home/Home';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='profile' element={<Profile/>}/>
    <Route path='Home' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
