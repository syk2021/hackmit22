import ProductListing from "../components/ProductListing";
import './pages-css/itemPages.css';

const ItemPage = () => {
    return (
            <div class="grid-container">
                <div class="grid-item">
                    <ProductListing
                    imagesrc="https://media.cnn.com/api/v1/images/stellar/prod/mowing-the-lawn-lede.jpg?c=16x9&q=h_270,w_480,c_fill"
                    title="Lawnmower"
                    price="10"
                    desc1="hello"
                    desc2="40V Horse power"
                    desc3="Cordless Lawn Mower"
                    />
                </div> 
                <div class="grid-item">
                    <ProductListing
                    imagesrc="https://m.media-amazon.com/images/I/61E1KXVmpmS.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                    title="Chainsaw"
                    price="0.85"
                    desc1="Eletric Chainsaw"
                    desc2="WEN 4017"
                    desc3="16'"
                    />
                </div>
                <div class="grid-item">
                    <ProductListing
                    imagesrc="http://mobileimages.lowes.com/productimages/558441db-43a0-406f-996c-e29b9a2d6c10/47926798.jpg?size=pdhism"
                    title="Cart"
                    price="10"
                    desc1="hello"
                    desc2="40V Horse power"
                    desc3="Cordless Lawn Mower"
                    />
                </div>
                <div class="grid-item">
                    <ProductListing
                    imagesrc="http://mobileimages.lowes.com/productimages/44f2e57a-6c6d-444d-8b5d-6a92ebeb9a77/11371190.jpg"
                    title="Wheel Barrow"
                    price="0.99"
                    desc1="Poly Wheelbarrow   "
                    desc2="4 cu. ft. "
                    desc3="Forged Steel"
                    />
                </div>  
                <div class="grid-item">
                    <ProductListing
                    imagesrc="https://www.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/6/360354.jpgmage.png"
                    title="Shovel"
                    price="0.01"
                    desc1="Shovel for Digging ，Camp Shovel and Garden Shovel"
                    desc2="28-inch Small Round Shovel with D-Handle Kids Metal Beach Shovel"
                    desc3="Gardening Tools Fiberglass Handle"
                    />
                </div>
                <div class="grid-item">
                    <ProductListing
                    imagesrc="https://m.media-amazon.com/images/I/61dJ9tZT+eL._AC_SX679_.jpg"
                    title="Garden Hose"
                    price="0.5"
                    desc1="Gilmour 843501-1001 Flexogen Heavy Duty Watering Garden Hose"
                    desc2="3/4in x 50 Feet"
                    desc3="Green"
                    />
                </div>
                <div class="grid-item">
                    <ProductListing
                    imagesrc="https://media.istockphoto.com/photos/fall-leaves-with-rake-picture-id157256122?k=20&m=157256122&s=612x612&w=0&h=kKZ0eKatmyjuueBklvMBK15iy5IrVRkaFYOb_2CEFn0="
                    title="Rake"
                    price="0.58"
                    desc1="Gardener"
                    desc2="Expert Gardener & Poly Leaf Rake"
                    desc3="24-inch Wood"
                    />
                </div>  
            </div>
    )
};

export default ItemPage;