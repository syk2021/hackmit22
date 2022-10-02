import './components-css/productListing.css';

export default function ProductListing(props){
    return(
    <div id='mg'>
        <div class="container">
            <img class="image" src="https://i.imgur.com/YUlU9co.jpeg" alt='abc'/>
            <div class="overlay"></div>
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