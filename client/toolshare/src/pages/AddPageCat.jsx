import './pages-css/AddPageCat.css'
import { NavLink } from 'react-router-dom'

const AddPageCat = () => {
    return (
        <div id='mainbodyaddpagecat'>

                <div id='sharenewcat'>Share New Item</div>
            <br/>
            <div id='itemcat2'>Item Category</div>
            <br/>
            <NavLink smoooth to="/addpage" className="header-navlink" id='name_id'>
            <div id='catboxes'>Lawn and garden</div>
            </NavLink>
            
            <div id='catboxes'>Kitchen Appliances</div>
            <div id='catboxes'>Power Tool</div>
            <div id='catboxes'>Roof and ladders</div>
            <div id='catboxes'>Generators</div>
            <div id='catboxes'>Plumbing</div>
        </div>
    );
};

export default AddPageCat;