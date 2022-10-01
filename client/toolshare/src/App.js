
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
        <Header/>
        <Navbar/>
          <Routes>
            <Route exact path = "/" element={<HomePage/>}/>
            <Route exact path = "/item" element={<ItemPage/>}/>
          </Routes>
    </>
  )
};

export default App;