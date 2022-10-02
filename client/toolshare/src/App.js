import ItemPage from './pages/ItemPage';
import ReservationsPage from './pages/ReservationsPage';
import AddPageCat from './pages/AddPageCat';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AddPage from './pages/AddPage';

function App() {
  return (
    <>
        <Header/>
        <Navbar/>
          <Routes>
            <Route exact path = "/" element={<ItemPage/>}/>
            <Route exact path ="/reservations" element={<ReservationsPage/>}/>
            <Route exact path ="/add" element={<AddPageCat/>}/> 
            <Route exact path ="/addpage" element={<AddPage/>}/>

          </Routes>
    </>
  )
};

export default App;