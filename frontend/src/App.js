import logo from './logo.svg';
import Signin from './components/Signin/Signin';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Home from './components/Home/Home';
import Signup from './components/signup/Signup';
import AddPost from './components/AddPost/AddPost';
function App() {
  const user=localStorage.getItem("user")
  const data=user?JSON.parse(user):null
 
  return (
    
    
   <BrowserRouter >
   
     
   <Routes>
    <Route path='/profile' element={data?<Profile/>:<Signin/>}/>
    <Route path='/' element={data?<Home/>:<Signin/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/post'  element={data?<AddPost/>:<Signin/>}/>
   </Routes>
  
   </BrowserRouter>
   
  );
}

export default App;
