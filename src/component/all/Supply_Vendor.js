import React , {Component} from 'react';
//import './Widget.css';
import './Supply.css';


import {IoIosSearch} from "react-icons/io";
import {FaRegUserCircle} from "react-icons/fa";  //vendor
import {FaShoppingBasket} from "react-icons/fa";  //product
import {RiSecurePaymentLine} from "react-icons/ri"; //supply
import {FaCalculator} from "react-icons/fa"; // payment
import {GrDocumentDownload} from "react-icons/gr";
import {BsTable} from "react-icons/bs";
import logo from "../../img/logo_white.png";
import {FaFilter} from "react-icons/fa/index";
import {BsBuilding} from "react-icons/bs";
import {RiArrowDownSLine, RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri/index";
import {Link} from "react-router-dom";

//------FORM -----//
import { BsPlusCircle } from "react-icons/bs"; //+
import { RiCheckboxCircleLine } from "react-icons/ri"; //check
import { AiOutlineCloseCircle } from "react-icons/ai"; //close
import { FaRegSave } from  "react-icons/fa"; //save
import {  AiOutlinePicture } from "react-icons/ai"; //image - picture
//https://react-icons.github.io/icons?name=bs    иконки   https://github.com/react-icons/react-icons
import { connect } from "react-redux";
import  { loadLeft } from "../../actions/action_loadLeftElement";
import { Button,Modal } from 'react-bootstrap';
import {FaTasks} from "react-icons/fa";


const tables_const =
    [
        {
            id: "1",
            name : "Vendor",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
                {   id:"2",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
            ]
        },

        {
            id: "2",
            name : "Product",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
                {   id:"2",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
            ]
        },
        {
            id: "3",
            name : "Payment",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
                {   id:"2",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
            ]
        },
        {
            id: "4",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
                {   id:"2",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
            ]
        },
        {
            id: "5",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
                {   id:"2",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
            ]
        },
        {
            id: "6",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
                {   id:"2",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
            ]
        },
        {
            id: "7",
            name : "Order",
            records : "4000",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },
        {
            id: "8",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },
        {
            id: "9",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },
        {
            id: "10",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },
        {
            id: "11",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },
        {
            id: "12",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },
        {
            id: "13",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },
        {
            id: "14",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },

        {
            id: "15",
            name : "Ordfdder",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },
        {
            id: "16",
            name : "Odfdrder",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },
        {
            id: "17",
            name : "Ordfdfder",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },
        {
            id: "18",
            name : "wwwwwOrder",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },


    ]

const tables_const_supply =
    [
        {
            id: "1",
            name : "Vendor",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
                {   id:"2",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
            ]
        },

        {
            id: "2",
            name : "Product",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
                {   id:"2",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
            ]
        },
        {
            id: "3",
            name : "Payment",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
                {   id:"2",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
            ]
        },
        {
            id: "4",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
                {   id:"2",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
            ]
        },
        {
            id: "5",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
                {   id:"2",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
            ]
        },
        {
            id: "6",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
                {   id:"2",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },
            ]
        },
        {
            id: "7",
            name : "Order",
            records : "4000",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },
        {
            id: "8",
            name : "Order",
            price : "500",
            sku : "45555",
            variant:[
                {   id:"1",
                    weight : "0.1",
                    width : "0.1",
                    height : "0.1",
                    long : "0.1",
                    product_variant:[
                        {
                            option_1:"white",
                            option_2:"39"

                        },
                    ]
                },

            ]
        },




    ]



function searchFor(val){
    return function (x){
        return x.name.toLowerCase().includes(val.toLowerCase()) || !val;
    }
}



class Supply_Vendor extends React.Component {
    componentWillMount() {
        this.props.loadLeft();
    }

    constructor(props){
        super(props)
        this.state={
            showLeft:true,
            showRight :false,
            showCenter :false,
            load_tables: tables_const,
            load_tables_suppl:tables_const_supply,
            showHide : false,
            showHide_option : false,

            val : '',
            val_supply:'',

            name : '',
            sku : '',
            description : '',
            active :'',
            vat :'',
            inc_vat:'',

            old_price:'',
            price:''

        }
        this.searchHandler = this.searchHandler.bind(this);
        this.searchHandler_supply = this.searchHandler_supply.bind(this);

    }
    searchHandler(event){
        this.setState({val : event.target.value})
    }
    searchHandler_supply(event){
        this.setState({val_supply : event.target.value})
    }


    operation_left()
    {
        this.setState({
            showLeft:!this.state.showLeft
        })
    }


    operation_right()
    {
        this.setState({
            showRight:!this.state.showRight
        })
    }

    operation_center(id,name,price,sku)
    {
        console.log(id,name,price,sku);


        this.setState({
            showCenter:true,

            name : name,
            sku : sku,
            description : "description",
            active : "active",
            vat :price,
            inc_vat:price,

            old_price:price,
            price:price
        })
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    handleModalShowHide_options() {
        this.setState({ showHide_option: !this.state.showHide_option })
    }

    add_new_product()
    {

        this.setState({
            name : "",
            sku : "",
            description : "",
            active : "",
            vat :"",
            inc_vat:"",

            old_price:"",
            price:""
        })
    }


    operation_center_right(){
        this.setState({
            showRight:!this.state.showRight,
            showCenter:!this.state.showCenter
        })
    }

    state = {
        options: [
            {
                text: "Option 1",
                value: "1"
            },
            {
                text: "Option 2",
                value: "2"
            },
            {
                text: "Option 3",
                value: "3"
            }
        ]
    };



    render() {
        const options = [
            { label: "One", value: 1},
            { label: "Two", value: 2},
        ]
        return (
            <div className="app-viewport inspect_">


                <div className="app-sidebar">


                    <ul className="app-sidebar-menu">


                        <li >
                            <a href="#" className={"leftPanel__a app-sidebar-menu__logo"}>
                                <img src="data:image/svg+xml,%3Csvg width='62' height='34' viewBox='0 0 62 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M0 11.9132L0.269565 34L62 30.654L58.8931 7.22894L0 11.9132Z' fill='white'/%3E %3Cpath d='M56.5359 10.1115L48.8815 10.6942L46.2824 19.5359L42.5486 11.154L34.7852 11.7019L36.1856 29.8711L41.6835 29.4549L40.9162 18.6301L45.7521 29.1492L48.2346 29.0051L51.5496 17.8971L52.3157 28.6386L57.8875 28.3056L56.5359 10.1115Z' fill='url(%23paint0_linear)'/%3E %3Cpath d='M20.0346 12.7879L14.627 31.3745L20.9247 30.962L21.4112 28.7591L28.0237 28.2956L28.8449 30.4017L35.1177 29.9059L27.0345 12.261L20.0346 12.7879ZM22.5735 23.8959L23.9414 17.9244L26.1819 23.6312L22.5735 23.8959Z' fill='url(%23paint1_linear)'/%3E %3Cpath d='M13.4212 13.2637L7.8744 13.6564C7.8744 13.6564 8.6668 24.6861 8.72447 25.1707C8.76459 25.5099 8.67181 25.8851 8.66053 25.9324C8.36338 27.2345 7.2124 27.452 6.40872 27.4606C5.58874 27.4693 4.41017 26.8083 4.41017 26.8083L2.4668 31.1521C4.06789 32.4692 9.01786 32.9836 11.9542 30.8875C14.8906 28.7914 14.2926 24.9309 14.2926 24.9309L13.4212 13.2637Z' fill='url(%23paint2_linear)'/%3E %3Cpath opacity='0.5' d='M4.32166 13.3855L4.1875 16.0631L32.0129 12.4487L30.9321 9.36975' fill='%23920074'/%3E %3Cpath d='M2.56641 2.14208L2.70182 14.1894L30.6626 11.5118L26.475 0L2.56641 2.14208Z' fill='%23CD00BE'/%3E %3Cpath d='M4.40234 4.5326L5.09444 11.4459L9.83252 10.9986L9.67956 9.17709L7.03029 9.43305L6.53128 4.32013L4.40234 4.5326Z' fill='white'/%3E %3Cpath d='M10.0293 3.95982L12.1382 3.76971L12.8353 10.6681L10.7327 10.9166L10.0293 3.95982Z' fill='white'/%3E %3Cpath d='M12.5527 3.75854L14.9475 3.51128L16.9247 7.99177L17.9654 3.23047L20.3726 2.98322L18.5145 10.1425L15.8013 10.3886L12.5527 3.75854Z' fill='white'/%3E %3Cpath d='M20.752 2.95714L21.4553 9.8891L26.7263 9.35357L26.5357 7.54448L23.3548 7.87002L23.2896 7.10339L26.4066 6.76792L26.1896 4.96131L23.1492 5.29306L23.0489 4.60347L26.2172 4.27917L26.0241 2.44647L20.752 2.95714Z' fill='white'/%3E %3Cdefs%3E %3ClinearGradient id='paint0_linear' x1='56.427' y1='10.0039' x2='36.4641' y2='30.148' gradientUnits='userSpaceOnUse'%3E %3Cstop stop-color='%239B00D4'/%3E %3Cstop offset='0.1061' stop-color='%23AD02B8'/%3E %3Cstop offset='0.2353' stop-color='%23BE039D'/%3E %3Cstop offset='0.3764' stop-color='%23CB0487'/%3E %3Cstop offset='0.5332' stop-color='%23D50578'/%3E %3Cstop offset='0.7178' stop-color='%23DA0670'/%3E %3Cstop offset='1' stop-color='%23DC066D'/%3E %3C/linearGradient%3E %3ClinearGradient id='paint1_linear' x1='31.8904' y1='17.0727' x2='16.1861' y2='32.9196' gradientUnits='userSpaceOnUse'%3E %3Cstop stop-color='%239B00D4'/%3E %3Cstop offset='0.1061' stop-color='%23AD02B8'/%3E %3Cstop offset='0.2353' stop-color='%23BE039D'/%3E %3Cstop offset='0.3764' stop-color='%23CB0487'/%3E %3Cstop offset='0.5332' stop-color='%23D50578'/%3E %3Cstop offset='0.7178' stop-color='%23DA0670'/%3E %3Cstop offset='1' stop-color='%23DC066D'/%3E %3C/linearGradient%3E %3ClinearGradient id='paint2_linear' x1='16.2382' y1='16.0547' x2='1.86811' y2='30.5553' gradientUnits='userSpaceOnUse'%3E %3Cstop stop-color='%239B00D4'/%3E %3Cstop offset='0.1061' stop-color='%23AD02B8'/%3E %3Cstop offset='0.2353' stop-color='%23BE039D'/%3E %3Cstop offset='0.3764' stop-color='%23CB0487'/%3E %3Cstop offset='0.5332' stop-color='%23D50578'/%3E %3Cstop offset='0.7178' stop-color='%23DA0670'/%3E %3Cstop offset='1' stop-color='%23DC066D'/%3E %3C/linearGradient%3E %3C/defs%3E %3C/svg%3E" alt="logo"/>
                            </a>
                        </li>





                        <li >
                            <a href="#" className={"leftPanel__a"}>
                                <i className="material-icons menu-icon"><Link to ={"/vendor"}><BsBuilding/></Link></i>

                            </a>
                        </li>






                        <li  >
                            <a href="#" className={"leftPanel__a"}>
                                <i className="material-icons menu-icon"><Link to={"/product"}><FaShoppingBasket/></Link></i>

                            </a>
                        </li>
                        <li className="active" >
                            <a href="#" className={"leftPanel__a"}>
                                <i className="material-icons menu-icon"><Link to={"/supply"}><RiSecurePaymentLine/></Link></i>

                            </a>
                        </li>






                        <li >
                            <a href="#" className={"leftPanel__a"}>
                                <i className="material-icons menu-icon"><Link to={"/payment"}><FaCalculator/></Link></i>

                            </a>
                        </li>
                        <li >
                            <a href="#" className={"leftPanel__a"}>
                                <i className="material-icons menu-icon"><Link to={"/tables"}><BsTable/></Link></i>

                            </a>
                        </li>



                            <li >
                                <a href="#" className={"leftPanel__a"}>
                                    <i className="material-icons menu-icon"><FaTasks/></i>

                                </a>
                            </li>
                            <li >
                                <a href="#" className={"leftPanel__a"}>
                                    <i className="material-icons menu-icon"><Link to ={"/widget"}><FaRegUserCircle/></Link></i>

                                </a>
                            </li>





                    </ul>

                </div>



                <div className="app-main">
                    <div className="placeholder">


                        {this.state.showLeft ?
                            <div className="grid-item ">
                                 SUPPLY<br/>
                                <div className={"grid-item__functional-icons"}>
                                    <a> <i>  <Link to={"/tables/product"}><BsTable/></Link></i> </a>

                                    <a onClick={()=>this.add_new_product()}> <i><BsPlusCircle/></i> </a>
                                </div>
                                <div className={"grid-item__search_group "} data-validate={"Search"}>
                                     <input className={"grid-item__search_input"} type={"search"} id={"search_input"}
                                                       name={"search_input"} placeholder={"Search"}
                                                       onChange={this.searchHandler}
                                />

                                </div>

                                <div className={"ScrollStyle"}>
                                    {
                                        this.state.load_tables.filter(searchFor(this.state.val)).map( all_tables=>

                                            <div className="card border-light mb-1" key={all_tables.id} onClick={()=>this.operation_center(all_tables.id, all_tables.name,all_tables.price,all_tables.sku)}>
                                                <div className="card-header bg-transparent border-light bg-corporate-color rounded-0">{all_tables.name}</div>
                                                <div className="card-body text-dark">
                                                    <h5 className="card-title"></h5>
                                                    <p className="card-text">
                                                        <p> External Id: {all_tables.inn}</p>
                                                        <p> User: {all_tables.contact_name}</p>
                                                        <p> Status: {all_tables.sku}</p>
                                                        <p> Date Crete: {all_tables.sku}</p>
                                                    </p>
                                                </div>

                                            </div>
                                        )





                                    }


                                </div>

                                <div className={"add_components"}>

                                    <RiArrowDownSLine/>
                                </div>

                            </div>

                            : null}











                        {this.state.showCenter && !this.state.showRight && !this.state.showLeft?



                            <div className="grid-item-2_2">[Form element]
                                <div className={"arrow"}>
                                    <button className={"button-arrow_left"} onClick={()=>this.operation_left()}> <RiArrowLeftSLine/></button>

                                </div>
                                <ul className="breadcrumb">
                                    <li><Link to ="/vendor">Vendor</Link></li>
                                    <li><Link to ="/product">Product</Link></li>
                                    <li>Supply</li>
                                    <li><Link to ="/payment">Payments</Link></li>
                                </ul>





                                <div className="container">

                                    <div className="row">
                                        <div className="col">
                                            <p>Vendor Name</p>
                                            <p>   Inn </p>
                                            <p>  Contact Name </p>
                                            <p>  Contact Phone </p>
                                            <p>  Contact Phone </p>
                                        </div>
                                        <div className="col">
                                            {/*сделать переменную оторая контатинирует эти все поля */}
                                            <p>
                                                Postal Code,AdministrativeArea,Settlement,
                                                Street,House
                                            </p>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col">
                                            <div className={"grid-item__search_group"} data-validate={"Search"}>
                                             <input className={"grid-item__search_input"} type={"search"} id={"search_input"}
                                                                   name={"search_input"} placeholder={"Search"}
                                                                   onChange={this.searchHandler_supply}
                                            />
                                                <span className={"focus-input100"} data-placeholder="&#xf191;"></span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <p>Vat ___________________</p>
                                            <p> Sum __________________</p>
                                            <p> Sum to pay ____________</p>

                                        </div>
                                    </div>

                                    <div className={"ScrollStyle_supply"}>
                                        {
                                            this.state.load_tables_suppl.filter(searchFor(this.state.val_supply)).map( all_tables=>

                                                <div className="card border-light mb-1" key={all_tables.id} onClick={()=>this.operation_center(all_tables.id, all_tables.name,all_tables.price,all_tables.sku)}>
                                                    <div className="card-header bg-transparent border-light bg-corporate-color rounded-0">
                                                        <div className="row">
                                                            <div className="col">
                                                                <p>Order   ____________</p>
                                                                <p>Status  ____________</p>
                                                                <p>Store    ____________</p>
                                                            </div>
                                                            <div className="col">
                                                                <GrDocumentDownload/>
                                                            </div>
                                                        </div>
                                                        <div className="ScrollStyle_supply__header__post-info">
                                                            <p> <RiCheckboxCircleLine/>Postal Code,AdministrativeArea,Settlement,
                                                                Street,House </p>


                                                        </div>

                                                        <div className="row">
                                                            <div className="col">
                                                                <p>Label Link  :</p>
                                                                <p>Packages Id  :</p>
                                                                <p>Delivery Type  :</p>
                                                            </div>
                                                            <div className="col"></div>
                                                            <div className="col"></div>
                                                        </div>


                                                    </div>
                                                    <div className="card-body text-dark">
                                                        <h5 className="card-title"></h5>
                                                        <div>

                                                            <table className="table">
                                                                <thead>
                                                                <tr>
                                                                    <th scope="col">#</th>
                                                                    <th scope="col">Product Variant</th>
                                                                    <th scope="col">Price</th>
                                                                    <th scope="col">Vat</th>
                                                                    <th scope="col">Qantity</th>
                                                                    <th scope="col">Discount </th>
                                                                    <th scope="col">SUM</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Jacob</td>
                                                                    <td>Thornton</td>
                                                                    <td>@fat</td>
                                                                    <td>Jacob</td>
                                                                    <td>Thornton</td>
                                                                    <td>@fat</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Larry</td>
                                                                    <td>the Bird</td>
                                                                    <td>@twitter</td>
                                                                    <td>Larry</td>
                                                                    <td>the Bird</td>
                                                                    <td>@twitter</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>

                                                            <div className="row">
                                                                <div className="col"></div>
                                                                <div className="col"></div>
                                                                <div className="col">
                                                                    <p>Vat ___________________</p>
                                                                    <p> Sum __________________</p>
                                                                    <p> Sum to pay ____________</p>
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>

                                                </div>
                                            )





                                        }


                                    </div>

                                </div>




                            </div>


                            :
                            null

                        }



                        {this.state.showCenter && !this.state.showRight && this.state.showLeft?



                            <div className="grid-item-2_1">[Form element]
                                <div className={"arrow"}>
                                    <button className={"button-arrow_left"} onClick={()=>this.operation_left()}> <RiArrowLeftSLine/></button>

                                </div>
                                <ul className="breadcrumb">
                                    <li><Link to ="/vendor">Vendor</Link></li>
                                    <li><Link to ="/product_vendor">Product</Link></li>
                                    <li>Supply</li>
                                    <li><Link to ="/payment_vendor">Payments</Link></li>
                                </ul>





                                <div className="container">

                                    <div className="row">
                                        <div className="col">
                                            <p>Vendor Name</p>
                                            <p>   Inn </p>
                                            <p>  Contact Name </p>
                                            <p>  Contact Phone </p>
                                            <p>  Contact Phone </p>
                                        </div>
                                        <div className="col">
                                            {/*сделать переменную оторая контатинирует эти все поля */}
                                            <p>
                                                Postal Code,AdministrativeArea,Settlement,
                                                Street,House
                                            </p>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col">
                                            <div className={"grid-item__search_group"} data-validate={"Search"}>
                                                 <input className={"grid-item__search_input"} type={"search"} id={"search_input"}
                                                                   name={"search_input"} placeholder={"Search"}
                                                                   onChange={this.searchHandler_supply}
                                            />
                                                <span className={"focus-input100"} data-placeholder="&#xf191;"></span>
                                            </div>
                                        </div>
                                        <div className="col">
                                           <p>Vat ___________________</p>
                                            <p> Sum __________________</p>
                                                <p> Sum to pay ____________</p>

                                        </div>
                                    </div>

                                    <div className={"ScrollStyle_supply"}>
                                        {
                                            this.state.load_tables_suppl.filter(searchFor(this.state.val_supply)).map( all_tables=>

                                                <div className="card border-light mb-1" key={all_tables.id} onClick={()=>this.operation_center(all_tables.id, all_tables.name,all_tables.price,all_tables.sku)}>
                                                    <div className="card-header bg-transparent border-light bg-corporate-color rounded-0">
                                                        <div className="row">
                                                            <div className="col">
                                                              <p>Order   ____________</p>
                                                                <p>Status  ____________</p>
                                                                <p>Store    ____________</p>
                                                            </div>
                                                            <div className="col">
                                                                <GrDocumentDownload/>
                                                            </div>
                                                        </div>
                                                        <div className="ScrollStyle_supply__header__post-info">
                                                            <p> <RiCheckboxCircleLine/>Postal Code,AdministrativeArea,Settlement,
                                                                Street,House </p>


                                                        </div>

                                <div className="row">
                                    <div className="col">
                                        <p>Label Link  :</p>
                                        <p>Packages Id  :</p>
                                        <p>Delivery Type  :</p>
                                    </div>
                                    <div className="col"></div>
                                    <div className="col"></div>
                                </div>


                                                    </div>
                                                    <div className="card-body text-dark">
                                                        <h5 className="card-title"></h5>
                                                        <div>

                                                            <table className="table">
                                                                <thead>
                                                                <tr>
                                                                    <th scope="col">#</th>
                                                                    <th scope="col">Product Variant</th>
                                                                    <th scope="col">Price</th>
                                                                    <th scope="col">Vat</th>
                                                                    <th scope="col">Qantity</th>
                                                                    <th scope="col">Discount </th>
                                                                    <th scope="col">SUM</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Jacob</td>
                                                                    <td>Thornton</td>
                                                                    <td>@fat</td>
                                                                    <td>Jacob</td>
                                                                    <td>Thornton</td>
                                                                    <td>@fat</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Larry</td>
                                                                    <td>the Bird</td>
                                                                    <td>@twitter</td>
                                                                    <td>Larry</td>
                                                                    <td>the Bird</td>
                                                                    <td>@twitter</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>

                                                            <div className="row">
                                                                <div className="col"></div>
                                                                <div className="col"></div>
                                                                <div className="col">
                                                                    <p>Vat ___________________</p>
                                                                    <p> Sum __________________</p>
                                                                    <p> Sum to pay ____________</p>
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>

                                                </div>
                                            )





                                        }


                                    </div>

                                </div>





                            </div>


                            :
                            null

                        }




                        {this.state.showRight ?
                            <div className="grid-item-3">
                                STORE
                                <br/>
                                <br/>


                                PostGetTypes

                            </div>:

                            null}


                    </div>
                </div>




            </div>

        );
    }
}

export default connect(null,{loadLeft})(Supply_Vendor);