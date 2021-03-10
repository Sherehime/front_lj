import {FaFilter} from "react-icons/fa/index";
import {BsArrowBarDown} from "react-icons/bs/index";
import React from "react";



const  gridItem =()=>{
    return (
<div>
    [Table name]<br/>
    <div className={"oooooo"}>
        <button > O </button>
    </div>
    <div className={"search_input"} data-validate={"Search"}>
        <FaFilter/>  <input className={""} type={"text"} id ={"search_input"} name={"search_input"} placeholder={"Search"}  />
        <span className={"focus-input100"} data-placeholder="&#xf191;"></span>
    </div>
    <div className="card border-success mb-1" >
        <div className="card-header bg-transparent border-info">Contacts</div>
        <div className="card-body text-success">
            <h5 className="card-title"></h5>
            <p className="card-text">info</p>
        </div>

    </div>

    <div className="card border-success mb-1" >
        <div className="card-header bg-transparent border-info">Vendor</div>
        <div className="card-body text-success">
            <h5 className="card-title"></h5>
            <p className="card-text">info</p>
        </div>

    </div>

    <div className="card border-success mb-1" >
        <div className="card-header bg-transparent border-info">Payment</div>
        <div className="card-body text-success">
            <h5 className="card-title"></h5>
            <p className="card-text">info</p>
        </div>

    </div>
    <div className="card border-success mb-1" >
        <div className="card-header bg-transparent border-info">Product</div>
        <div className="card-body text-success">
            <h5 className="card-title"></h5>
            <p className="card-text">info</p>
        </div>

    </div>




    <div  className={"add_components"}>

        <BsArrowBarDown/>
    </div>

</div>

    );
}


export default gridItem;
