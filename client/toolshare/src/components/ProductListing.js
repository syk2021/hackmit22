import './components-css/productListing.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Box, Typography, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ProductListing(props){
    const [disp2, setdisp2] = useState(false);
    const [disp3, setdisp3] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return(
    <div id='mg'>
        <div class="productcontainer">
            <img class="productimage" src={props.imagesrc} alt='abc'/>
            <div class="productoverlay">
            <div onClick={() => setdisp2(true)}>
                <div class="monthav">Available for August</div>
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
            {disp3 ? (<div onClick = {() => setOpen(true) & setdisp3(false) & setdisp2(false)}>
                <button id='dateButton3'>
                    Confirm Registration
                    </button>
            </div>):<></>}
            {open ? <Alert>Confirmed!</Alert>: <></>}
            </div>
        </div>
        <div id='productTitle'>
        <div>{props.title}</div>
        <div><b>${props.price}</b>/use</div>
        </div>
        <div id='productDescription'>
            <b>{props.desc1}</b>
            <br/>
            {props.desc2}
            <br/>
            {props.desc3}
        </div>
    </div>);
}