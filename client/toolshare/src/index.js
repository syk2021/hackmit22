import React from 'react';
import ReactDOM from 'react-dom/client';

import ProductListing from './components/ProductListing';

import Basic from './components/Basic.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Basic/>
    <Basic/>
    <Basic/>
    <Basic/>
    <Basic/>
    <Basic/>
  <ProductListing name = "Sanskar"/>
  <ProductListing name = "Amit"/>
  <ProductListing/>
  <ProductListing/>
  
  </div>
);
