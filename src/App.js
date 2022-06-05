import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import  styled from 'styled-components';
import './App.css';
import Images from './assets/Images';
import MenuProducts from './components/products/MenuProducts';

function App() {
  return (
    <DivApp>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/menu' element={<MenuProducts />}/>
    </Routes>
    </DivApp>
  );
}

export default App;

const DivApp= styled.div`
  background-image: url(${Images.backgroundImg});
  background-repeat: no-repeat;
  background-size:100%;
  height:100vh;

`;