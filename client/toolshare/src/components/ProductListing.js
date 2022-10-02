import './components-css/productListing.css';
import React, { useState, useEffect } from 'react';

export default function ProductListing(props){
    //const [disp1, setdisp1] = useState(false);
    const [disp2, setdisp2] = useState(false);
    const [disp3, setdisp3] = useState(false);
    return(
    <div id='mg'>
        <div class="productcontainer">
            <img class="productimage" src="https://i.imgur.com/YUlU9co.jpeg" alt='abc'/>
            <div class="productoverlay">
            <div onClick={() => setdisp2(true)}>Sanskar</div>
            <br/>
            {disp2 ? (<div onClick={() => setdisp3(true)} >Lamsal</div>):<></>}
            <br/>
            {disp3 ? (<div onClick = {() => setdisp3(false) & setdisp2(false)}>Hello</div>):<></>}
            </div>
        </div>
        <div id='productTitle'>
        <div>LawnMower</div>
        <div>$102</div>
        </div>
        <div id='productDescription'>
            <b>Ryobi</b>
            <br/>
            40V HP Brushless 20 in. 
            <br/>
            Cordless Push Mower
        </div>
    </div>);
}