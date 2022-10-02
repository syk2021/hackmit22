import './pages-css/AddPage.css'

const AddPage = () => {
    return (
        
        <div id='mainbodyaddpage'>
        <div id='sharenew'>Share New Item</div>
        <br/>
        <div id='itemcat'>Item Category</div>
        <br/>
        <div id='boxcat'></div>
        <br/>
        <div id='formforadd'>
            <div id='firstrowform'>
                <div>
                    <div><label id='labeltextt'>Item Name</label></div>
                    <div><input type="text" name="textbox1" id='labeltextbox' style={{width:342, height:59}}/></div>
                </div>
                <div>
                    <div><label id='labeltextt'>Item Brand</label></div>
                    <div><input type="text" name="textbox1" id='labeltextbox' style={{width:342, height:59}}/></div>
                </div>
            </div>
            <div id='rowsinform'>
                <div><label id='labeltextt'>Description</label></div>
                <div><input type="text" name="textbox1" id='labeltextbox' style={{width:755, height:121}}/></div>
            </div>
            <div id='rowsinform'>
                <div><label id='labeltextt'>Item Price</label></div>
                <div><input type="text" name="textbox1" id='labeltextbox' style={{width:342, height:59}}/></div>
            </div>
            <button id='formaddbutton'>Start Sharing</button>
        </div>
        </div>
        
    );
};

export default AddPage;