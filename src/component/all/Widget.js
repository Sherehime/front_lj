import React from 'react';
import './Widget.css';

import {FaRegUserCircle} from "react-icons/fa";  //vendor
import {FaShoppingBasket} from "react-icons/fa";  //product
import {RiSecurePaymentLine} from "react-icons/ri"; //supply
import  {FaTasks} from "react-icons/fa";

import {FaCalculator} from "react-icons/fa"; // payment
import {BsTable} from "react-icons/bs";
import logo from "../../img/logo_white.png";
import avatar from "../../img/images.jpeg";
import {FaFilter} from "react-icons/fa/index";
import {RiArrowDownSLine, RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri/index";
import {Link} from "react-router-dom";
import {BsBuilding} from "react-icons/bs/index";
//https://react-icons.github.io/icons?name=bs    иконки   https://github.com/react-icons/react-icons

const tables_const =
    [
        {
            id: "1",
            name : "Vendor",
            records : "5",
        },

        {
            id: "2",
            name : "Product",
            records : "400",
        },
        {
            id: "3",
            name : "Payment",
            records : "4000",
        },
        {
            id: "4",
            name : "Order",
            records : "4000",
        },
        {
            id: "5",
            name : "Order",
            records : "4000",
        },
        {
            id: "6",
            name : "Order",
            records : "4000",
        },
        {
            id: "7",
            name : "Order",
            records : "4000",
        },
        {
            id: "8",
            name : "Order",
            records : "4000",
        },
        {
            id: "9",
            name : "Order",
            records : "4000",
        },
        {
            id: "10",
            name : "Ordfder",
            records : "4000",
        },
        {
            id: "11",
            name : "Ordfdder",
            records : "4000",
        },
        {
            id: "12",
            name : "Odfdrder",
            records : "4000",
        },
        {
            id: "13",
            name : "Ordfdder",
            records : "4000",
        },
        {
            id: "14",
            name : "Ordfdder",
            records : "4000",
        },

        {
            id: "15",
            name : "Ordfdder",
            records : "4000",
        },
        {
            id: "16",
            name : "Odfdrder",
            records : "4000",
        },
        {
            id: "17",
            name : "Ordfdfder",
            records : "4000",
        },
        {
            id: "18",
            name : "Order",
            records : "4000",
        },


    ]

function searchFor(val){
    return function (x){
        return x.name.toLowerCase().includes(val.toLowerCase()) || !val;
    }
}

class Widget extends React.Component {


    constructor(props){
        super(props)
        this.state={
            showLeft:true,
            showRight :false,
            showCenter :false,
            load_tables: tables_const,
            val : '',
        }
        this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler(event){
        this.setState({val : event.target.value})
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

    operation_center()
    {
        this.setState({
            showCenter:!this.state.showCenter
        })
    }

    operation_center_right(){
        this.setState({
            showRight:!this.state.showRight,
            showCenter:!this.state.showCenter
        })
    }

//   <div className="app-header">
//
//                     <div className="app-header__hc_left">
//              <span className={"logo_login_global"}>
//                         <img src={logo}/>
//             </span>
//                     </div>
//
//
//                     <div className="app-header__hc_right">
//                         <div className={"app-header__hc_right__global_search__group"}>
//                             <div className="iconPlusInput">
//                                 <input className={"header__global_search"} id={"global_search"} type={"text"}
//                                        name={"search"} placeholder={"Search"} autoComplete={"off"}/>
//
//                             </div>
//                             <div className="iconPlusInput icon_i">
//                                 <IoIosSearch/>
//                             </div>
//                         </div>
//
//
//
//                     </div>
//
//
//                 </div>
    render() {

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






                        <li >
                            <a href="#" className={"leftPanel__a"}>
                                <i className="material-icons menu-icon"><Link to={"/product"}><FaShoppingBasket/></Link></i>

                            </a>
                        </li>
                        <li >
                            <a href="#" className={"leftPanel__a"}>
                                <i className="material-icons menu-icon"><Link to={"/supply"}><RiSecurePaymentLine/></Link></i>

                            </a>
                        </li>






                        <li >
                            <a href="#" className={"leftPanel__a"}>
                                <i className="material-icons menu-icon"><Link to={"/payment"}><FaCalculator/></Link></i>

                            </a>
                        </li>
                        <li className="active" >
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



                        Widget coming soon


                    </div>
                </div>




            </div>

        );
    }
}

export default Widget;