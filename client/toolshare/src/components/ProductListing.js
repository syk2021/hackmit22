import { useState } from 'react';
import './components-css/productListing.css';

export default function ProductListing(props){
    const [count, setCount] = useState(0);

    return( 
    <div id='productMain'>
        <h1>Hello, {props.name}. You are {props.age} years old</h1>
        <h2>Good evening. You have clicked the button {count} times</h2>
        
        <button onClick={()=>setCount(count+1)}>
            Click Me    
        </button>;
    </div>);
}