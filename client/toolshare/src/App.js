import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path = "/" element={<HomePage/>}/>
        <Route exact path = "/item" element={<ItemPage/>}/>
      </Routes>
    </>
  )
}