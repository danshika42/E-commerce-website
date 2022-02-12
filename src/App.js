import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import SubHome from './components/SubHome';
import WishList from './components/WishList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Navbar/><SubHome/></>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/wishlist' element={<><Navbar/><WishList/></>} />
        <Route path='/checkout' element={<><Navbar/><Checkout/></>}/>
      </Routes>
    </div>
  );
}

export default App;
