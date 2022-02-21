import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import SubHome from './components/SubHome';
import WishList from './components/WishList';
import SingleProduct from './components/SingleProduct';
import SignUp from './components/SignUp';
import { auth } from './components/Firebase';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [isLoggedin,setIsLogedin]=useState(false);
  onAuthStateChanged(auth,(currentuser)=>{
    if(currentuser){
      setIsLogedin(true);
    }else{
      setIsLogedin(false)
    }
  })

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={(isLoggedin)?<><Navbar/><SubHome/></>:<Login/>} />
        <Route path='/login' element={(isLoggedin)?<><Navbar/><SubHome/></>:<Login/>} />
        <Route path='/signup' element={(isLoggedin)?<><Navbar/><SubHome/></>:<SignUp/>} />
        <Route path='/singleProduct' element={<><Navbar/><SingleProduct/></>} />
        <Route path='/wishlist' element={<><Navbar/><WishList/></>} />
        <Route path='/checkout' element={<><Navbar/><Checkout/></>}/>
      </Routes>
    </div>
  );
}

export default App;
