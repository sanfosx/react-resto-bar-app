import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import  styled from 'styled-components';
import './App.css';
import './firebaseConfig'
import Images from './assets/Images';
import MenuProducts from './components/products/MenuProducts';
import Login from './components/Login';
import { AuthProvider,useAuth } from './context/AuthContext';
import Register from './components/Register';
import User from './components/users/User'
import Product from './components/products/Product';

function App() {
  
  return (
    <AuthProvider>
      <DivApp >
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<MenuProducts/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/product' element={<Product/>}/>

        </Routes>
      </DivApp>
    </AuthProvider>
  );
}

export default App;

const DivApp= styled.div`
  background-image: url(${Images.backgroundImg});
  background-repeat: no-repeat;
  background-size:100%;
  height:100vh;
`;