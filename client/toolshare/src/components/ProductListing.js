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
            <div onClick={() => setdisp2(true)}>
                Available for August
                <br/>
                <div>
                <button id='dateButton'>1</button>
                <button id='dateButton'>12</button>
                <button id='dateButton'>21</button>
                </div>
            </div>
            {disp2 ? (<div onClick={() => setdisp3(true)}>
                <div>
                <button id='dateButton2'>11:00 AM</button>
                <button id='dateButton2'>11:30 AM</button>
                </div>
            </div>):<></>}
            {disp3 ? (<div onClick = {() => setdisp3(false) & setdisp2(false)}>
                <button id='dateButton3'>Confirm Registration</button>
            </div>):<></>}
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