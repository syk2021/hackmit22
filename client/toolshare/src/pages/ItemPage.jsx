import ProductListing from "../components/ProductListing";
import Grid from '@mui/material/Grid'; // Grid version 1
import './pages-css/itemPages.css';

const ItemPage = () => {
    return (
            <div class="grid-container">
                <div class="grid-item"><ProductListing/></div>
                <div class="grid-item"><ProductListing/></div>
                <div class="grid-item"><ProductListing/></div>  
                <div class="grid-item"><ProductListing/></div>
                <div class="grid-item"><ProductListing/></div>
                <div class="grid-item"><ProductListing/></div>  
                <div class="grid-item"><ProductListing/></div>
                <div class="grid-item"><ProductListing/></div>
                <div class="grid-item"><ProductListing/></div>  
            </div>
    )
};

export default ItemPage;