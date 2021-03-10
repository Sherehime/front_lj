import React , {Component} from 'react';
import "./Vendor.css";
import {FaRegUserCircle} from "react-icons/fa";  //vendor
import {FaShoppingBasket} from "react-icons/fa";  //product
import {RiSecurePaymentLine} from "react-icons/ri"; //supply
import {FaCalculator} from "react-icons/fa"; // payment
import {BsTable} from "react-icons/bs";
import {FaTasks} from "react-icons/fa";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {BsBuilding} from "react-icons/bs";
import {Link} from "react-router-dom";
import { FaRegSave } from  "react-icons/fa"; //save
//https://react-icons.github.io/icons?name=bs    иконки   https://github.com/react-icons/react-icons
import { connect } from "react-redux";
import  { loadLeft } from "../../actions/action_loadLeftElement";
import { Button,Modal } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';


const tables_const =
    [
        {
            id: "1",
            name : "Vendor",
            price : "500",
            sku : "45555",
            phone :"79788020531",
            email:"mail@mail.ru",
            email_notify:"mail@mail.ru",
            type:"option",
            responsible_user:"option",
            contact_name:"Igor",
            contact_phone:"79799090321",
            contact_email:"mail@mail.ru",
            name_official:"Igor Igorevich",
            inn:"233",
            kpp:"4234",
            head_position:"Индивидуальный предприниматель",
            base_on:"-",
            legal_addres:"109382, г. Москва, ул. Краснодонская, д. 42, кв. 30",
            post_address:"109382, г. Москва, ул. Краснодонская, д. 42, кв. 30",
            head_name:"Красов Андрей Владимирович",
            contract_number:"-",
            contract_date:"date",
            bank:"МОСКОВСКИЙ ФИЛИАЛ АО КБ МОДУЛЬБАНК",
            bik:"044525092",
            corr_acc:"40802810370010231133",
            acc:"40802810370010231133",
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
            price : "1500",
            sku : "425555",
            phone :"79783d531",
            email:"mail-ds@mail.ru",
            email_notify:"mail-ds@mail.ru",
            type:"option",
            responsible_user:"option",
            contact_name:"Oleg",
            contact_phone:"79733390321",
            contact_email:"mail@mail.ru",
            name_official:"Oleg Igorevich",
            inn:"233",
            kpp:"4234",
            head_position:"Индивидуальный предприниматель",
            base_on:"-",
            legal_addres:"109382, г. Москва, ул. Краснодонская, д. 42, кв. 30",
            post_address:"109382, г. Москва, ул. Краснодонская, д. 42, кв. 30",
            head_name:"Красов Андрей Владимирович",
            contract_number:"-",
            contract_date:"date",
            bank:"МОСКОВСКИЙ ФИЛИАЛ АО КБ МОДУЛЬБАНК",
            bik:"044525092",
            corr_acc:"40802810370010231133",
            acc:"40802810370010231133",
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
            phone :"79788020531",
            email:"mail@mail.ru",
            contact_name:"Igor",
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
            phone :"79788020531",
            contact_name:"Igor",
            email:"mail@mail.ru",
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
            contact_name:"Igor",
            phone :"79788020531",
            email:"mail@mail.ru",
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
            contact_name:"Igor",
            phone :"79788020531",
            email:"mail@mail.ru",
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
            phone :"79788020531",
            contact_name:"Igor",
            email:"mail@mail.ru",
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
            contact_name:"Igor",
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
            phone :"79788020531",
            contact_name:"Igor",
            email:"mail@mail.ru",
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
            phone :"79788020531",
            email:"mail@mail.ru",
            contact_name:"Igor",
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
            contact_name:"Igor",
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
            phone :"79788020531",
            email:"mail@mail.ru",contact_name:"Igor",
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
            phone :"79788020531",
            email:"mail@mail.ru",
            contact_name:"Igor",
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
            phone :"79788020531",
            email:"mail@mail.ru",
            contact_name:"Igor",
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
            phone :"79788020531",
            email:"mail@mail.ru",contact_name:"Igor",
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
            phone :"79788020531",
            email:"mail@mail.ru", contact_name:"Igor",
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
            phone :"79788020531",
            email:"mail@mail.ru",contact_name:"Igor",
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
            phone :"79788020531",contact_name:"Igor",
            email:"mail@mail.ru",
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



class Vendor extends React.Component {
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
            showHide : false,
            showHide_option : false,
            showHide_add_address : false,

            val : '',

            type:'',
            name : '',
            sku : '',
            description : '',
            active :'',
            vat :'',
            inc_vat:'',

            old_price:'',
            price:'',

            email:'',
            email_notify:'',
            responsible_user:'',
            contact_name:'',
            contact_phone:'',
            contact_email:'',
            name_official:'',
            inn:'',
            kpp:'',
            head_position:'',
            base_on:'',
            legal_addres:'',
            post_address:'',
            head_name:'',
            contract_number:'',
            contract_date:'',
            bank:'',
            bik:'',
            corr_acc:'',
            acc:'',


            open: false,
            key:1

        }
        this.searchHandler = this.searchHandler.bind(this);
        this.changeTab = this.changeTab.bind(this);
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



    operation_center(id,name,price,sku,phone , email,
    email_notify,
    responsible_user,
    contact_name,
    contact_phone,
    contact_email,
    name_official,
    inn,
    kpp,
    head_position,
    base_on,
                     legal_addres,
                     post_address,
                     head_name,
                     contract_number,
                     contract_date,
                     bank,
                     bik,
                     corr_acc,
                     acc,
                     type
                     )
    {



        this.setState({
            showCenter:true,

            name : name,
            sku : sku,
            description : "description",
            active : "active",
            vat :price,
            inc_vat:price,
            old_price:price,
            price:price,
            phone:phone,
            email:email,
            email_notify:email_notify,
            responsible_user: "user",
            contact_name: contact_name,
            contact_phone: contact_phone,
            contact_email: contact_email,
            name_official: name_official,
            inn: inn,
            kpp: kpp,
            head_position: head_position,
            base_on: base_on,
            legal_addres:legal_addres,
            post_address:post_address,
            head_name:head_name,
            contract_number:contract_number,
            contract_date:contract_date,
            bank:bank,
            bik:bik,
            corr_acc:corr_acc,
            acc:acc,
            type:type
        })
    }



    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    handleModalShowHide_options() {
        this.setState({ showHide_option: !this.state.showHide_option })
    }

    handleModalShowHide_add_address() {
        this.setState({ showHide_add_address: !this.state.showHide_add_address })
    }

    handleModalShowHide_contract(){
        this.setState({ showHide_add_contract: !this.state.showHide_add_contract })
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



//отслеживание изменения таба
    changeTab(key) {
        console.log('selected ' + key);
        this.setState({key});
        if (this.state.showRight == true)
            this.setState({showRight:!this.state.showRight});
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
        const { open } = this.state;
        return (
            <div className="app-viewport inspect_">


                <div className="app-sidebar">


                    <ul className="app-sidebar-menu">


                        <li >
                            <a href="#" className={"leftPanel__a app-sidebar-menu__logo"}>
                                <img src="data:image/svg+xml,%3Csvg width='62' height='34' viewBox='0 0 62 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M0 11.9132L0.269565 34L62 30.654L58.8931 7.22894L0 11.9132Z' fill='white'/%3E %3Cpath d='M56.5359 10.1115L48.8815 10.6942L46.2824 19.5359L42.5486 11.154L34.7852 11.7019L36.1856 29.8711L41.6835 29.4549L40.9162 18.6301L45.7521 29.1492L48.2346 29.0051L51.5496 17.8971L52.3157 28.6386L57.8875 28.3056L56.5359 10.1115Z' fill='url(%23paint0_linear)'/%3E %3Cpath d='M20.0346 12.7879L14.627 31.3745L20.9247 30.962L21.4112 28.7591L28.0237 28.2956L28.8449 30.4017L35.1177 29.9059L27.0345 12.261L20.0346 12.7879ZM22.5735 23.8959L23.9414 17.9244L26.1819 23.6312L22.5735 23.8959Z' fill='url(%23paint1_linear)'/%3E %3Cpath d='M13.4212 13.2637L7.8744 13.6564C7.8744 13.6564 8.6668 24.6861 8.72447 25.1707C8.76459 25.5099 8.67181 25.8851 8.66053 25.9324C8.36338 27.2345 7.2124 27.452 6.40872 27.4606C5.58874 27.4693 4.41017 26.8083 4.41017 26.8083L2.4668 31.1521C4.06789 32.4692 9.01786 32.9836 11.9542 30.8875C14.8906 28.7914 14.2926 24.9309 14.2926 24.9309L13.4212 13.2637Z' fill='url(%23paint2_linear)'/%3E %3Cpath opacity='0.5' d='M4.32166 13.3855L4.1875 16.0631L32.0129 12.4487L30.9321 9.36975' fill='%23920074'/%3E %3Cpath d='M2.56641 2.14208L2.70182 14.1894L30.6626 11.5118L26.475 0L2.56641 2.14208Z' fill='%23CD00BE'/%3E %3Cpath d='M4.40234 4.5326L5.09444 11.4459L9.83252 10.9986L9.67956 9.17709L7.03029 9.43305L6.53128 4.32013L4.40234 4.5326Z' fill='white'/%3E %3Cpath d='M10.0293 3.95982L12.1382 3.76971L12.8353 10.6681L10.7327 10.9166L10.0293 3.95982Z' fill='white'/%3E %3Cpath d='M12.5527 3.75854L14.9475 3.51128L16.9247 7.99177L17.9654 3.23047L20.3726 2.98322L18.5145 10.1425L15.8013 10.3886L12.5527 3.75854Z' fill='white'/%3E %3Cpath d='M20.752 2.95714L21.4553 9.8891L26.7263 9.35357L26.5357 7.54448L23.3548 7.87002L23.2896 7.10339L26.4066 6.76792L26.1896 4.96131L23.1492 5.29306L23.0489 4.60347L26.2172 4.27917L26.0241 2.44647L20.752 2.95714Z' fill='white'/%3E %3Cdefs%3E %3ClinearGradient id='paint0_linear' x1='56.427' y1='10.0039' x2='36.4641' y2='30.148' gradientUnits='userSpaceOnUse'%3E %3Cstop stop-color='%239B00D4'/%3E %3Cstop offset='0.1061' stop-color='%23AD02B8'/%3E %3Cstop offset='0.2353' stop-color='%23BE039D'/%3E %3Cstop offset='0.3764' stop-color='%23CB0487'/%3E %3Cstop offset='0.5332' stop-color='%23D50578'/%3E %3Cstop offset='0.7178' stop-color='%23DA0670'/%3E %3Cstop offset='1' stop-color='%23DC066D'/%3E %3C/linearGradient%3E %3ClinearGradient id='paint1_linear' x1='31.8904' y1='17.0727' x2='16.1861' y2='32.9196' gradientUnits='userSpaceOnUse'%3E %3Cstop stop-color='%239B00D4'/%3E %3Cstop offset='0.1061' stop-color='%23AD02B8'/%3E %3Cstop offset='0.2353' stop-color='%23BE039D'/%3E %3Cstop offset='0.3764' stop-color='%23CB0487'/%3E %3Cstop offset='0.5332' stop-color='%23D50578'/%3E %3Cstop offset='0.7178' stop-color='%23DA0670'/%3E %3Cstop offset='1' stop-color='%23DC066D'/%3E %3C/linearGradient%3E %3ClinearGradient id='paint2_linear' x1='16.2382' y1='16.0547' x2='1.86811' y2='30.5553' gradientUnits='userSpaceOnUse'%3E %3Cstop stop-color='%239B00D4'/%3E %3Cstop offset='0.1061' stop-color='%23AD02B8'/%3E %3Cstop offset='0.2353' stop-color='%23BE039D'/%3E %3Cstop offset='0.3764' stop-color='%23CB0487'/%3E %3Cstop offset='0.5332' stop-color='%23D50578'/%3E %3Cstop offset='0.7178' stop-color='%23DA0670'/%3E %3Cstop offset='1' stop-color='%23DC066D'/%3E %3C/linearGradient%3E %3C/defs%3E %3C/svg%3E" alt="logo"/>
                            </a>
                        </li>





                        <li className="active" >
                            <Link to ={"/vendor"}>
                            <a href="#" className={"leftPanel__a active"}>
                                <i className="material-icons menu-icon"><BsBuilding/></i>

                            </a>
                            </Link>
                        </li>






                        <li >    <Link to={"/product"}>
                            <a href="#" className={"leftPanel__a"}>

                                <i className="material-icons menu-icon"><FaShoppingBasket/></i>

                            </a>
                            </Link>
                        </li>
                        <li ><Link to={"/supply"}>
                            <a href="#" className={"leftPanel__a"}>
                                <i className="material-icons menu-icon"><RiSecurePaymentLine/></i>

                            </a></Link>
                        </li>






                        <li ><Link to={"/payment"}>
                            <a href="#" className={"leftPanel__a"}>
                                <i className="material-icons menu-icon"><FaCalculator/></i>

                            </a></Link>
                        </li>
                        <li ><Link to={"/tables"}>
                            <a href="#" className={"leftPanel__a"}>
                                <i className="material-icons menu-icon"><BsTable/></i>

                            </a></Link>
                        </li>



                            <li >
                                <a href="#" className={"leftPanel__a"}>
                                    <i className="material-icons menu-icon"><FaTasks/></i>

                                </a>
                            </li>
                            <li ><Link to ={"/widget"}>
                                <a href="#" className={"leftPanel__a"}>
                                    <i className="material-icons menu-icon"><FaRegUserCircle/></i>

                                </a></Link>
                            </li>





                    </ul>

                </div>



                <div className="app-main">
                    <div className="placeholder">


                        {this.state.showLeft ?
                            <div className="grid-item">
                                <div className={"m-2"}>

                                        <h5 className={"mt-3  light_text"}>Контрагенты </h5>



                                    <input className={" default_button_navigation search_input mt-4"} type={"search"} id={"search_input"}
                                                       name={"search_input"} placeholder={"Поиск"}
                                                       onChange={this.searchHandler}      />



                                <Button  className={"default_button_navigation mt-2"}>ДОБАВИТЬ ВЕНДОРА</Button>
                                <Button  className={"default_button_navigation mt-2"}>ТАБЛИЦА</Button>
                                    </div>


                                <div className={"ScrollStyle"}>
                                    {
                                        this.state.load_tables.filter(searchFor(this.state.val)).map( all_tables=>

                                            <div className="card border-left-0 border-right-0  border-bottom-0 mb-0 rounded-0" key={all_tables.id} onClick={()=>this.operation_center(all_tables.id, all_tables.name,all_tables.price,all_tables.sku,
                                                all_tables.phone,
                                                all_tables.email,
                                                all_tables.email_notify,
                                                all_tables.responsible_user,
                                                all_tables.contact_name,
                                                all_tables.contact_phone,
                                                all_tables.contact_email,
                                                all_tables.name_official,
                                                all_tables.inn,
                                                all_tables.kpp,
                                                all_tables.head_position,
                                                all_tables.base_on,

                                                all_tables.legal_addres,
                                                all_tables.post_address,
                                                all_tables.head_name,
                                                all_tables.contract_number,
                                                all_tables.contract_date,
                                                all_tables.bank,
                                                all_tables.bik,
                                                all_tables.corr_acc,
                                                all_tables.acc,
                                                all_tables.type
                                                ) }>

                                                <div className="card-body text-dark grid-item p-1">
                                                    <h5 className="card-title"></h5>
                                                    <p className="card-text pl-2 ">

                                                        <h5 className={'mb-1'}> <p>  {all_tables.name}</p> </h5>

                                                                <p>  {all_tables.contact_name}</p>
                                                                <p>   {all_tables.phone}</p>
                                                                <p>  {all_tables.email}</p>


                                                    </p>
                                                </div>

                                            </div>
                                        )


                                    }


                                </div>

                                <div className={"add_components"}>


                                </div>

                            </div>

                            : null}












                        <Modal show={this.state.showHide_add_contract}>
                            <Modal.Header className={"button-arrow_right_modal"} onClick={() => this.handleModalShowHide_contract()}>
                                <Modal.Title>Contract</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <form className={"all_form"}>
                                    <div className={"container-fluid"}>

                                        <div className={"col"}>

                                                <h5>Information</h5>

                                                <div className="form-group">

                                                    <input type="text" className=" form-control form-control-sm"
                                                           id="validationDefault02" placeholder="Name"
                                                            required/>
                                                    <label className="" htmlFor="validationDefault02">Name</label>
                                                </div>

                                                <div className="form-group">

                                                    <input type="text" className=" form-control form-control-sm"
                                                           id="validationDefault02" placeholder="Streamer Commission"
                                                           required/>
                                                    <label className="" htmlFor="validationDefault02">Streamer Commission</label>
                                                </div>


                                                <div className="form-group">

                                                    <input type="text" className=" form-control form-control-sm"
                                                           id="validationDefault02" placeholder="Technical Commission"
                                                           required/>
                                                    <label className="" htmlFor="validationDefault02">Technical Commission</label>
                                                </div>
                                                <div className="form-group">

                                                    <input type="text" className=" form-control form-control-sm"
                                                           id="validationDefault02" placeholder="Technical Commission"
                                                           required/>
                                                    <label className="" htmlFor="validationDefault02">Technical Commission</label>
                                                </div>

                                            <h5>Category</h5>

                                            <div className="form-group">

                                                <input type="text" className=" form-control form-control-sm"
                                                       id="validationDefault02" placeholder="Base Commission"
                                                       required/>
                                                <label className="" htmlFor="validationDefault02">Base Commission</label>
                                            </div>


                                        <button className={"button-arrow_right m-3 pl-3 pr-3"}>Add  Category</button>

                                        <h5>Partners</h5>
                                        <div className="form-group">

                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02" placeholder="Partner Commission"
                                                   required/>
                                            <label className="" htmlFor="validationDefault02">Partner Commission</label>
                                        </div>
                                        <div className="form-group">

                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02" placeholder="Partner Expire Date"
                                                   required/>
                                            <label className="" htmlFor="validationDefault02">Partner Expire Date</label>
                                        </div>
                                        <div className="form-group">

                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02" placeholder="Partner"
                                                   required/>
                                            <label className="" htmlFor="validationDefault02">Partner</label>
                                        </div>



                                    </div>


                                    </div>





                                </form>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button className={"button-arrow_right_modal"} onClick={() => this.handleModalShowHide_contract()}>
                                    Close
                                </Button>
                                <Button className={"button-arrow_right"} onClick={() => this.handleModalShowHide_contract()}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>


                        {this.state.showCenter && !this.state.showRight && this.state.showLeft?



                            <div className="grid-item-2_1">


                                <div className="container-fluid">
                                    <h4 style={{margin:10}}></h4>


                                    <div className={ "row"}>

                                        <div className="col-sm-12">

                                            <div className="raised-block">

                                                <form className={"all_form all_form_margin "}>
                                                    <h4 style={{margin:15}}>Тут должна быть какая-то информация</h4>
                                                    <div className={""}>
                                                        <div>



                                                            <Tabs defaultActiveKey={this.state.key}  onSelect={this.changeTab}  id="uncontrolled-tab-example" style={{flex:1,justifyContent:'space-between',flexDirection:'row'}}>
                                                                <Tab eventKey={1} tabClassName={'justify'} title="Общая" url="/nav-vendor">
                                                                    <div className="form-row m-10 p-10 padding-form">

                                                                        <div className="col mb-3">
                                                                            <p className={'heading_for_form'}>Информация</p>

                                                                        </div>

                                                                        <div className="col mb-3  ">
                                                                            <div className="grid-item-2__save-button">
                                                                               <button className={'default_button_form pl-10'}>СОХРАНИТЬ</button>
                                                                            </div>


                                                                        </div>

                                                                    </div>

                                                                    <div className="form-row padding-form ">

                                                                                <div className="col mb-3 form-group all_input_field all_input_field">
                                                                                <label className="" htmlFor="validationDefault01">Название</label>
                                                                                <input type="text" className=" form-control form-control-sm"
                                                                                       id="validationDefault01"
                                                                                       value={this.state.name} required/>

                                                                            </div>


                                                                        <div className="col mb-3 form-group all_input_field ">
                                                                            <label className="" htmlFor="validationDefault02">Тип</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.type}
                                                                                   required/>

                                                                        </div>


                                                                    </div>



                                                                    <div className="form-row">
                                                                        <div className="col mb-3 form-group all_input_field ">
                                                                            <label className="" htmlFor="validationDefault01">Email</label>
                                                                            <input type="email" className="form-control form-control-sm"
                                                                                   id="validationDefault01"
                                                                                   value={this.state.email} required/>

                                                                        </div>
                                                                        <div className="col mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Email для уведомлений</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.email_notify} required/>

                                                                        </div>

                                                                    </div>
                                                                    <div className="form-row">
                                                                        <div className="col mb-3 form-group all_input_field ">
                                                                            <label className="" htmlFor="validationDefault02">Номер телефона</label>
                                                                            <input type="tel" className="form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.phone} required/>

                                                                        </div>


                                                                        <div className="col mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Ответственный пользователь</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.responsible_user} required/>

                                                                        </div>
                                                                    </div>

                                                                        <hr />

                                                                    <p className={'heading_for_form padding-form'}>Контакт</p>


                                                                    <div className="form-row padding-form">

                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault01">Имя</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault01"
                                                                                   value={this.state.contact_name} required/>

                                                                        </div>
                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Телефон</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.contact_phone} required/>

                                                                        </div>
                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Email</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.contact_email} required/>

                                                                        </div>
                                                                    </div>



                                                                    <div >
                                                                        <button
                                                                            onClick={() => this.setState({ open: !open })}
                                                                            aria-controls="example-collapse-text"
                                                                            aria-expanded={open}
                                                                            style={{ marginTop:10}}
                                                                            className={'default_button'}
                                                                        >
                                                                            РАЗВЕРНУТЬ
                                                                        </button>
                                                                        <Collapse in={this.state.open}>
                                                                            <div id="container-fluid">

                                                                                <p className={'heading_for_form padding-form'}>Юридическая информация</p>
                                                                                <div className="form-row padding-form">

                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault01">Юр. наименование</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault01"
                                                                                               value={this.state.name_official} required/>


                                                                                    </div>


                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault01">ФИО</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault01"
                                                                                               value={this.state.head_name} required/>

                                                                                    </div>
                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Действует на основании</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.base_on} required/>

                                                                                    </div>


                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">ИНН</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.inn} required/>

                                                                                    </div>
                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault01">Должность</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault01"
                                                                                               value={this.state.head_position} required/>

                                                                                    </div>

                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">НДС</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.vat} required/>

                                                                                    </div>

                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">КПП</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.kpp} required/>

                                                                                    </div>

                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Номер контракта</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.contract_number} required/>

                                                                                    </div>
                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Дата контракта</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.contract_date} required/>

                                                                                    </div>



                                                                                    <div className="col-12 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Юридический адрес</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.legal_addres} required/>

                                                                                    </div>
                                                                                    <div className="col-12 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault01">Почтовый адрес</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault01"
                                                                                               value={this.state.post_address} required/>

                                                                                    </div>







                                                                                </div>
                                                                                <hr />

                                                                                <p className={'heading_for_form padding-form'}>Банковская информация</p>
                                                                                <div className="form-row padding-form">

                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault01">Банк</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault01"
                                                                                               value={this.state.bank} required/>

                                                                                    </div>
                                                                                                              <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                    <label className="" htmlFor="validationDefault02">Бик</label>
                                                                                    <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.bik} required/>

                                                                                    </div>
                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Расчетный счет</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.acc} required/>

                                                                                    </div>
                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Корр. счет</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.corr_acc} required/>

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </Collapse>
                                                                    </div>
                                                                </Tab>
                                                                <Tab eventKey={2}  tabClassName={'justify'} title="Продукт" url="/nav-product">
                                                                    <p className={'heading_for_form'} onClick={()=>this.operation_right()}>Продукт</p>

                                                                    <div className={"col padding-form"} data-validate={"Search"}>
                                                                        <input className={"  default_button"} type={"text"} id={"search_input"}
                                                                               name={"search_input"} placeholder={"Поиск"}/>
                                                                        <span className={"focus-input100"} data-placeholder="&#xf191;"></span>

                                                                    </div>
                                                                    <div className={'padding-form'}>
                                                                        <table className="table table-striped">
                                                                            <thead>
                                                                            <tr>
                                                                                <th scope="col">#</th>
                                                                                <th scope="col">Имя</th>
                                                                                <th scope="col">Цена</th>
                                                                                <th scope="col">Sky</th>

                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <th scope="row">1</th>
                                                                                <td>Продукт 1</td>
                                                                                <td>100</td>
                                                                                <td>10049983</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">2</th>
                                                                                <td>Продукт 2</td>
                                                                                <td>100</td>
                                                                                <td>10049983</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">3</th>
                                                                                <td>Продукт 3</td>
                                                                                <td>100</td>
                                                                                <td>10049983</td>

                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className={'padding-form'}>
                                                                    <button
                                                                        className={'default_button '}
                                                                    >
                                                                        РАЗВЕРНУТЬ
                                                                    </button></div>
                                                                </Tab>
                                                                <Tab eventKey={3} tabClassName={'justify'} title="Поставка" url="/nav-supply">
                                                                    <p className={'heading_for_form padding-form'} onClick={()=>this.operation_right()}>Поставка</p>

                                                                    <div className={"col padding-form form-group"} data-validate={"Search"}>
                                                                        <input className={"default_button"} type={"text"} id={"search_input"}
                                                                               name={"search_input"} placeholder={"Поиск"}/>
                                                                        <span className={"focus-input100"} data-placeholder="&#xf191;"></span>

                                                                    </div>
                                                                    <div className={'padding-form'}>
                                                                        <table className="table table-striped">
                                                                            <thead>
                                                                            <tr>
                                                                                <th scope="col">#</th>
                                                                                <th scope="col">Заказ</th>
                                                                                <th scope="col">ID</th>
                                                                                <th scope="col">Тип доставки</th>

                                                                                 <th scope="col">Id пакета</th>
                                                                                <th scope="col">Склад</th>
                                                                                <th scope="col">Статус</th>
                                                                                <th scope="col">Дата содания</th>

                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <th scope="row">1</th>
                                                                                <td>43453</td>
                                                                                <td>3453</td>
                                                                                <td>Курьер</td>

                                                                                <th >14354</th>
                                                                                <td>склад 1</td>
                                                                                <td>Доставлена</td>
                                                                                <td>13.05.2020</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">2</th>
                                                                                <td>43453</td>
                                                                                <td>3453</td>
                                                                                <td>Курьер</td>

                                                                                <th >14354</th>
                                                                                <td>склад 1</td>
                                                                                <td>Доставлена</td>
                                                                                <td>13.05.2020</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">3</th>
                                                                                <td>43453</td>
                                                                                <td>3453</td>
                                                                                <td>Курьер</td>

                                                                                <th >14354</th>
                                                                                <td>склад 1</td>
                                                                                <td>Доставлена</td>
                                                                                <td>13.05.2020</td>

                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>

                                                                    <div className={'padding-form'}>   <button
                                                                        className={'default_button'}
                                                                    >
                                                                        РАЗВЕРНУТЬ
                                                                    </button></div>



                                                                </Tab>
                                                                <Tab eventKey={4} tabClassName={'justify'} title="Платежи" url="/nav-payments">

                                                                    <Tabs  defaultActiveKey={5}  onSelect={this.changeTab}  id="uncontrolled-tab-example" style={{paddingTop:10,flex:1,justifyContent:'space-between',flexDirection:'row'}}>
                                                                        <Tab  eventKey={5} tabClassName={'justify'} title="Все платежи" url="/nav-vendor">
                                                                            <p className={'heading_for_form padding-form'} >Платежи</p>

                                                                            <div className={"col padding-form form-group"} data-validate={"Search"}>
                                                                                <input className={"default_button "} type={"text"} id={"search_input"}
                                                                                       name={"search_input"} placeholder={"Поиск"}/>
                                                                                <span className={"focus-input100"} data-placeholder="&#xf191;"></span>

                                                                            </div>
                                                                            <div className={'padding-form'}>
                                                                                <table className="table table-striped">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th scope="col">#</th>

                                                                                        <th scope="col">ID</th>
                                                                                        <th scope="col">Тип </th>

                                                                                        <th scope="col">SUM</th>

                                                                                        <th scope="col">От</th>
                                                                                        <th scope="col">К</th>
                                                                                        <th scope="col">Поставка</th>
                                                                                        <th scope="col">Статус</th>
                                                                                        <th scope="col">Дата содания</th>

                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <th scope="row">1</th>
                                                                                        <td>5004</td>
                                                                                        <td>Тип</td>
                                                                                        <td>231</td>

                                                                                        <td>Свайпи</td>
                                                                                        <td>Шиптор</td>
                                                                                        <td>Поставка</td>

                                                                                        <td>Завершен</td>

                                                                                        <td>12.09</td>
                                                                                    </tr>


                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div className={'padding-form'}></div>
                                                                            <button
                                                                                className={'default_button'}
                                                                            >
                                                                                РАЗВЕРНУТЬ
                                                                            </button>
                                                                        </Tab>

                                                                        <Tab eventKey={6} tabClassName={'justify'} title="Реестр" url="/nav-vendor">
                                                                            <p className={'heading_for_form padding-form'} >Реестр начиная с</p>


                                                                            <div className={'padding-form'}>
                                                                                <table className="table table-striped">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th scope="col">#</th>

                                                                                        <th scope="col">ID</th>
                                                                                        <th scope="col">Тип </th>

                                                                                        <th scope="col">SUM</th>

                                                                                        <th scope="col">От</th>
                                                                                        <th scope="col">К</th>
                                                                                        <th scope="col">Поставка</th>
                                                                                        <th scope="col">Статус</th>
                                                                                        <th scope="col">Дата содания</th>

                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <th scope="row">1</th>
                                                                                        <td>5004</td>
                                                                                        <td>Тип</td>
                                                                                        <td>231</td>

                                                                                        <td>Свайпи</td>
                                                                                        <td>Шиптор</td>
                                                                                        <td>Поставка</td>

                                                                                        <td>Завершен</td>

                                                                                        <td>12.09</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
<hr/>
                                                                            <p className={'heading_for_form padding-form'}>Реестр начиная с  ДАТА  по ДАТА</p>


                                                                            <div className={'padding-form'}>
                                                                                <table className="table table-striped">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th scope="col">#</th>

                                                                                        <th scope="col">ID</th>
                                                                                        <th scope="col">Тип </th>

                                                                                        <th scope="col">SUM</th>

                                                                                        <th scope="col">От</th>
                                                                                        <th scope="col">К</th>
                                                                                        <th scope="col">Поставка</th>
                                                                                        <th scope="col">Статус</th>
                                                                                        <th scope="col">Дата содания</th>

                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <th scope="row">1</th>
                                                                                        <td>5004</td>
                                                                                        <td>Тип</td>
                                                                                        <td>231</td>

                                                                                        <td>Свайпи</td>
                                                                                        <td>Шиптор</td>
                                                                                        <td>Поставка</td>

                                                                                        <td>Завершен</td>

                                                                                        <td>12.09</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>

                                                                        </Tab>
                                                                    </Tabs>



                                                                </Tab>
                                                            </Tabs>




                                                        </div>


                                                    </div>









                                                </form></div>


                                        </div>





                                    </div>


                                </div>
                                {this.state.key == 1?
                                    <>
                                        <div className="container-fluid ">
                                            <div className="raised-block ">
                                                <form className={"all_form "}>
                                                    <div className={"product_variant"}>
                                                        <div className={"grid-item-2__product_variant__functional-icons"}>


                                                        </div>

                                                        <Tabs defaultActiveKey="contract"  id="uncontrolled-tab-example" style={{flex:1,justifyContent:'space-between',flexDirection:'row'}}>

                                                            <Tab eventKey="contract" title="Контракт" href="/nav-contract"  tabClassName={'justify'}>
                                                                <div className={"container-fluid"}>
                                                                    <p className={'heading_for_form padding-form'}>Информация</p>
                                                                    <div className="form-row padding-form">

                                                                        <div className="col-12 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault01">Имя</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault01"
                                                                                   value={this.state.name_contract} required/>


                                                                        </div>


                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault01">Стримера комиссия</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault01"
                                                                                   value={this.state.streamer_commission} required/>

                                                                        </div>
                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Техническая комиссия</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.technical_commission} required/>

                                                                        </div>


                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Курьерская комиссия</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.courier_commission} required/>

                                                                        </div>

                                                                    </div>
                                                                    <hr />
                                                                    <p className={'heading_for_form padding-form'}>Партнеры</p>
                                                                    <div className="form-row padding-form">


                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault01">Партнерская комиссия</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault01"
                                                                                   value={this.state.partner_commission} required/>

                                                                        </div>
                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Дата истечения действия</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.partner_expire_date} required/>

                                                                        </div>


                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Партнер</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.partner} required/>

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                            <Tab eventKey="category" title="Категория" href="/nav-category"  tabClassName={'justify'}>
                                                                <div className={"container-fluid"}>
                                                                    <p className={'heading_for_form padding-form'}>Информация</p>
                                                                    <div className="form-row padding-form">

                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Базовая комиссия</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.base_commission} required/>

                                                                        </div>
                                                                        <div className={"col-12 padding-form"}>
                                                                            <table className="table table-striped">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th scope="col">#</th>
                                                                                    <th scope="col">Категория продукта</th>
                                                                                    <th scope="col">Процент</th>

                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr>
                                                                                    <th scope="row">1</th>
                                                                                    <td>Категория 1</td>
                                                                                    <td>13</td>

                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">2</th>
                                                                                    <td>Категория 2</td>
                                                                                    <td>3</td>

                                                                                </tr>

                                                                                </tbody>
                                                                            </table>
                                                                            <div className={'padding-form'}>

                                                                                <Button className={'default_button'}>
                                                                                    ДОБАВИТЬ КАТЕГОРИЮ
                                                                                </Button>
                                                                            </div>

                                                                        </div>



                                                                    </div></div>
                                                            </Tab>

                                                        </Tabs>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>

                                        <div className="container-fluid ">
                                            <form className={"all_form "}>
                                                <div className={"product_variant"}>
                                                    <div className={"grid-item-2__product_variant__functional-icons "}>

                                                        <p className={'heading_for_form'} onClick={()=>this.operation_right()}>Склад</p>
                                                    </div>


                                                    <div className={"col  padding-form form-group"} data-validate={"Search"}>
                                                        <input className={"default_button"} type={"text"} id={"search_input"}
                                                               name={"search_input"} placeholder={"Поиск"}/>
                                                        <span className={"focus-input100"} data-placeholder="&#xf191;"></span>

                                                    </div>
                                                    <br/>




                                                    <div>
                                                        <table className="table table-striped">
                                                            <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Имя</th>
                                                                <th scope="col">Тип склада</th>

                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Склад 1</td>
                                                                <td>Тип 1</td>

                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>Склад 2</td>
                                                                <td>тип 2</td>

                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3</th>
                                                                <td>склад 3</td>
                                                                <td>тип 3</td>

                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>

                                    </>



                                    : null }


                                {this.state.key == 2?
                                    <>
                                        <div className="container-fluid ">
                                            <div className="raised-block ">
                                                <form className={"all_form "}>
                                                    <div className={"product_variant"}>
                                                        <div className={"grid-item-2__product_variant__functional-icons padding-form"}>
                                                            <p className={'heading_for_form'} onClick={()=>this.operation_right()}>Варианты продукта</p>

                                                        </div>
                                                        <div className={"col form-group padding-form "} data-validate={"Search"}>
                                                            <input className={"default_button "} type={"text"} id={"search_input"}
                                                                   name={"search_input"} placeholder={"Поиск"}/>
                                                            <span className={"focus-input100"} data-placeholder="&#xf191;"></span>

                                                        </div>
                                                        <div className={'padding-form'}>
                                                            <table className="table table-striped" >
                                                                <thead>
                                                                <tr>
                                                                    <th scope="col">#</th>
                                                                    <th scope="col">Имя</th>
                                                                    <th scope="col">Первый атрибут</th>
                                                                    <th scope="col">Второй атрибут</th>

                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Вариант 1</td>
                                                                    <td>ПА1</td>
                                                                    <td>ВА1</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Вариант 2</td>
                                                                    <td>ПА2</td>
                                                                    <td>ВА1</td>

                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Вариант 3</td>
                                                                    <td>ПА3</td>
                                                                    <td>ВА1</td>

                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className={'padding-form'}>
                                                        <button
                                                            className={'default_button'}
                                                        >
                                                            РАЗВЕРНУТЬ
                                                        </button></div>
                                                        <div className="form-row  padding-form">

                                                            <div className="col ">
                                                                <button className={'default_button'}>ДОБАВИТЬ ОПЦИЮ</button>

                                                            </div>

                                                            <div className="col   ">

                                                                    <button className={'default_button'}>ДОБАВИТЬ ВАРИАНТ</button>



                                                            </div>

                                                        </div>


                                                    </div>
                                                </form>
                                            </div>

                                        </div>



                                    </>



                                    : null }
                            </div>


                            :
                            null

                        }



                        {this.state.showCenter && this.state.showRight && this.state.showLeft ?



                            <div className="grid-item-2">


                                <div className="container-fluid">
                                    <h4 style={{margin:10}}></h4>


                                    <div className={ "row"}>

                                        <div className="col-sm-12">

                                            <div className="raised-block">

                                                <form className={"all_form all_form_margin "}>
                                                    <h4 style={{margin:15}}>Тут должна быть какая-то информация</h4>
                                                    <div className={""}>
                                                        <div>



                                                            <Tabs defaultActiveKey={this.state.key}  onSelect={this.changeTab}  id="uncontrolled-tab-example" style={{flex:1,justifyContent:'space-between',flexDirection:'row'}}>
                                                                <Tab eventKey={1} tabClassName={'justify'} title="Общая" url="/nav-vendor">
                                                                    <div className="form-row m-10 p-10 padding-form">

                                                                        <div className="col mb-3">
                                                                            <p className={'heading_for_form'}>Информация</p>

                                                                        </div>

                                                                        <div className="col mb-3  ">
                                                                            <div className="grid-item-2__save-button">
                                                                                <button className={'default_button_form pl-10'}>СОХРАНИТЬ</button>
                                                                            </div>


                                                                        </div>

                                                                    </div>

                                                                    <div className="form-row padding-form ">

                                                                        <div className="col mb-3 form-group all_input_field all_input_field">
                                                                            <label className="" htmlFor="validationDefault01">Название</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault01"
                                                                                   value={this.state.name} required/>

                                                                        </div>


                                                                        <div className="col mb-3 form-group all_input_field ">
                                                                            <label className="" htmlFor="validationDefault02">Тип</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.type}
                                                                                   required/>

                                                                        </div>


                                                                    </div>



                                                                    <div className="form-row">
                                                                        <div className="col mb-3 form-group all_input_field ">
                                                                            <label className="" htmlFor="validationDefault01">Email</label>
                                                                            <input type="email" className="form-control form-control-sm"
                                                                                   id="validationDefault01"
                                                                                   value={this.state.email} required/>

                                                                        </div>
                                                                        <div className="col mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Email для уведомлений</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.email_notify} required/>

                                                                        </div>

                                                                    </div>
                                                                    <div className="form-row">
                                                                        <div className="col mb-3 form-group all_input_field ">
                                                                            <label className="" htmlFor="validationDefault02">Номер телефона</label>
                                                                            <input type="tel" className="form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.phone} required/>

                                                                        </div>


                                                                        <div className="col mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Ответственный пользователь</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.responsible_user} required/>

                                                                        </div>
                                                                    </div>

                                                                    <hr />

                                                                    <p className={'heading_for_form padding-form'}>Контакт</p>


                                                                    <div className="form-row padding-form">

                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault01">Имя</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault01"
                                                                                   value={this.state.contact_name} required/>

                                                                        </div>
                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Телефон</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.contact_phone} required/>

                                                                        </div>
                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Email</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.contact_email} required/>

                                                                        </div>
                                                                    </div>



                                                                    <div >
                                                                        <button
                                                                            onClick={() => this.setState({ open: !open })}
                                                                            aria-controls="example-collapse-text"
                                                                            aria-expanded={open}
                                                                            style={{ marginTop:10}}
                                                                            className={'default_button'}
                                                                        >
                                                                            РАЗВЕРНУТЬ
                                                                        </button>
                                                                        <Collapse in={this.state.open}>
                                                                            <div id="container-fluid">

                                                                                <p className={'heading_for_form padding-form'}>Юридическая информация</p>
                                                                                <div className="form-row padding-form">

                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault01">Юр. наименование</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault01"
                                                                                               value={this.state.name_official} required/>


                                                                                    </div>


                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault01">ФИО</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault01"
                                                                                               value={this.state.head_name} required/>

                                                                                    </div>
                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Действует на основании</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.base_on} required/>

                                                                                    </div>


                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">ИНН</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.inn} required/>

                                                                                    </div>
                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault01">Должность</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault01"
                                                                                               value={this.state.head_position} required/>

                                                                                    </div>

                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">НДС</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.vat} required/>

                                                                                    </div>

                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">КПП</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.kpp} required/>

                                                                                    </div>

                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Номер контракта</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.contract_number} required/>

                                                                                    </div>
                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Дата контракта</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.contract_date} required/>

                                                                                    </div>



                                                                                    <div className="col-12 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Юридический адрес</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.legal_addres} required/>

                                                                                    </div>
                                                                                    <div className="col-12 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault01">Почтовый адрес</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault01"
                                                                                               value={this.state.post_address} required/>

                                                                                    </div>







                                                                                </div>
                                                                                <hr />

                                                                                <p className={'heading_for_form padding-form'}>Банковская информация</p>
                                                                                <div className="form-row padding-form">

                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault01">Банк</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault01"
                                                                                               value={this.state.bank} required/>

                                                                                    </div>
                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Бик</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.bik} required/>

                                                                                    </div>
                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Расчетный счет</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.acc} required/>

                                                                                    </div>
                                                                                    <div className="col-md-4 mb-3 form-group all_input_field">
                                                                                        <label className="" htmlFor="validationDefault02">Корр. счет</label>
                                                                                        <input type="text" className=" form-control form-control-sm"
                                                                                               id="validationDefault02"
                                                                                               value={this.state.corr_acc} required/>

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </Collapse>
                                                                    </div>
                                                                </Tab>
                                                                <Tab eventKey={2}  tabClassName={'justify'} title="Продукт" url="/nav-product">
                                                                    <p className={'heading_for_form'} onClick={()=>this.operation_right()}>Продукт</p>

                                                                    <div className={"col padding-form"} data-validate={"Search"}>
                                                                        <input className={"  default_button"} type={"text"} id={"search_input"}
                                                                               name={"search_input"} placeholder={"Поиск"}/>
                                                                        <span className={"focus-input100"} data-placeholder="&#xf191;"></span>

                                                                    </div>
                                                                    <div className={'padding-form'}>
                                                                        <table className="table  table-striped">
                                                                            <thead>
                                                                            <tr>
                                                                                <th scope="col">#</th>
                                                                                <th scope="col">Имя</th>
                                                                                <th scope="col">Цена</th>
                                                                                <th scope="col">Sky</th>

                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <th scope="row">1</th>
                                                                                <td>Продукт 1</td>
                                                                                <td>100</td>
                                                                                <td>10049983</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">2</th>
                                                                                <td>Продукт 2</td>
                                                                                <td>100</td>
                                                                                <td>10049983</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">3</th>
                                                                                <td>Продукт 3</td>
                                                                                <td>100</td>
                                                                                <td>10049983</td>

                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className={'padding-form'}>
                                                                        <button
                                                                            className={'default_button '}
                                                                        >
                                                                            РАЗВЕРНУТЬ
                                                                        </button></div>
                                                                </Tab>
                                                                <Tab eventKey={3} tabClassName={'justify'} title="Поставка" url="/nav-supply">
                                                                    <p className={'heading_for_form padding-form'} onClick={()=>this.operation_right()}>Поставка</p>

                                                                    <div className={"col padding-form form-group"} data-validate={"Search"}>
                                                                        <input className={"default_button"} type={"text"} id={"search_input"}
                                                                               name={"search_input"} placeholder={"Поиск"}/>
                                                                        <span className={"focus-input100"} data-placeholder="&#xf191;"></span>

                                                                    </div>
                                                                    <div className={'padding-form'}>
                                                                        <table className="table table-striped">
                                                                            <thead>
                                                                            <tr>
                                                                                <th scope="col">#</th>
                                                                                <th scope="col">Заказ</th>
                                                                                <th scope="col">ID</th>
                                                                                <th scope="col">Тип доставки</th>

                                                                                <th scope="col">Id пакета</th>
                                                                                <th scope="col">Склад</th>
                                                                                <th scope="col">Статус</th>
                                                                                <th scope="col">Дата содания</th>

                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <th scope="row">1</th>
                                                                                <td>43453</td>
                                                                                <td>3453</td>
                                                                                <td>Курьер</td>

                                                                                <th >14354</th>
                                                                                <td>склад 1</td>
                                                                                <td>Доставлена</td>
                                                                                <td>13.05.2020</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">2</th>
                                                                                <td>43453</td>
                                                                                <td>3453</td>
                                                                                <td>Курьер</td>

                                                                                <th >14354</th>
                                                                                <td>склад 1</td>
                                                                                <td>Доставлена</td>
                                                                                <td>13.05.2020</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">3</th>
                                                                                <td>43453</td>
                                                                                <td>3453</td>
                                                                                <td>Курьер</td>

                                                                                <th >14354</th>
                                                                                <td>склад 1</td>
                                                                                <td>Доставлена</td>
                                                                                <td>13.05.2020</td>

                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>

                                                                    <div className={'padding-form'}>   <button
                                                                        className={'default_button'}
                                                                    >
                                                                        РАЗВЕРНУТЬ
                                                                    </button></div>



                                                                </Tab>
                                                                <Tab eventKey={4} tabClassName={'justify'} title="Платежи" url="/nav-payments">

                                                                    <Tabs   defaultActiveKey={5}  onSelect={this.changeTab}  id="uncontrolled-tab-example" style={{paddingTop:10,flex:1,justifyContent:'space-between',flexDirection:'row'}}>
                                                                        <Tab  eventKey={5} tabClassName={'justify'} title="Все платежи" url="/nav-vendor">
                                                                            <p className={'heading_for_form padding-form'} >Платежи</p>

                                                                            <div className={"col padding-form form-group"} data-validate={"Search"}>
                                                                                <input className={"default_button "} type={"text"} id={"search_input"}
                                                                                       name={"search_input"} placeholder={"Поиск"}/>
                                                                                <span className={"focus-input100"} data-placeholder="&#xf191;"></span>

                                                                            </div>
                                                                            <div className={'padding-form'}>
                                                                                <table className="table table-striped">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th scope="col">#</th>

                                                                                        <th scope="col">ID</th>
                                                                                        <th scope="col">Тип </th>

                                                                                        <th scope="col">SUM</th>

                                                                                        <th scope="col">От</th>
                                                                                        <th scope="col">К</th>
                                                                                        <th scope="col">Поставка</th>
                                                                                        <th scope="col">Статус</th>
                                                                                        <th scope="col">Дата содания</th>

                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <th scope="row">1</th>
                                                                                        <td>5004</td>
                                                                                        <td>Тип</td>
                                                                                        <td>231</td>

                                                                                        <td>Свайпи</td>
                                                                                        <td>Шиптор</td>
                                                                                        <td>Поставка</td>

                                                                                        <td>Завершен</td>

                                                                                        <td>12.09</td>
                                                                                    </tr>


                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div className={'padding-form'}></div>
                                                                            <button
                                                                                className={'default_button'}
                                                                            >
                                                                                РАЗВЕРНУТЬ
                                                                            </button>
                                                                        </Tab>

                                                                        <Tab eventKey={6} tabClassName={'justify'} title="Реестр" url="/nav-vendor">
                                                                            <p className={'heading_for_form padding-form'} >Реестр начиная с</p>


                                                                            <div className={'padding-form'}>
                                                                                <table className="table table-striped">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th scope="col">#</th>

                                                                                        <th scope="col">ID</th>
                                                                                        <th scope="col">Тип </th>

                                                                                        <th scope="col">SUM</th>

                                                                                        <th scope="col">От</th>
                                                                                        <th scope="col">К</th>
                                                                                        <th scope="col">Поставка</th>
                                                                                        <th scope="col">Статус</th>
                                                                                        <th scope="col">Дата содания</th>

                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <th scope="row">1</th>
                                                                                        <td>5004</td>
                                                                                        <td>Тип</td>
                                                                                        <td>231</td>

                                                                                        <td>Свайпи</td>
                                                                                        <td>Шиптор</td>
                                                                                        <td>Поставка</td>

                                                                                        <td>Завершен</td>

                                                                                        <td>12.09</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <hr/>
                                                                            <p className={'heading_for_form padding-form'} >Реестр начиная с  ДАТА  по ДАТА</p>


                                                                            <div className={'padding-form'}>
                                                                                <table className="table table-striped">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th scope="col">#</th>

                                                                                        <th scope="col">ID</th>
                                                                                        <th scope="col">Тип </th>

                                                                                        <th scope="col">SUM</th>

                                                                                        <th scope="col">От</th>
                                                                                        <th scope="col">К</th>
                                                                                        <th scope="col">Поставка</th>
                                                                                        <th scope="col">Статус</th>
                                                                                        <th scope="col">Дата содания</th>

                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <th scope="row">1</th>
                                                                                        <td>5004</td>
                                                                                        <td>Тип</td>
                                                                                        <td>231</td>

                                                                                        <td>Свайпи</td>
                                                                                        <td>Шиптор</td>
                                                                                        <td>Поставка</td>

                                                                                        <td>Завершен</td>

                                                                                        <td>12.09</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>

                                                                        </Tab>
                                                                    </Tabs>



                                                                </Tab>
                                                            </Tabs>




                                                        </div>


                                                    </div>









                                                </form></div>


                                        </div>





                                    </div>


                                </div>
                                {this.state.key == 1?
                                    <>
                                        <div className="container-fluid ">
                                            <div className="raised-block ">
                                                <form className={"all_form "}>
                                                    <div className={"product_variant"}>
                                                        <div className={"grid-item-2__product_variant__functional-icons"}>


                                                        </div>

                                                        <Tabs defaultActiveKey="contract"  id="uncontrolled-tab-example" style={{flex:1,justifyContent:'space-between',flexDirection:'row'}}>

                                                            <Tab eventKey="contract" title="Контракт" href="/nav-contract"  tabClassName={'justify'}>
                                                                <div className={"container-fluid"}>
                                                                    <p className={'heading_for_form padding-form'}>Информация</p>
                                                                    <div className="form-row padding-form">

                                                                        <div className="col-12 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault01">Имя</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault01"
                                                                                   value={this.state.name_contract} required/>


                                                                        </div>


                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault01">Стримера комиссия</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault01"
                                                                                   value={this.state.streamer_commission} required/>

                                                                        </div>
                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Техническая комиссия</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.technical_commission} required/>

                                                                        </div>


                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Курьерская комиссия</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.courier_commission} required/>

                                                                        </div>

                                                                    </div>
                                                                    <hr />
                                                                    <p className={'heading_for_form padding-form'}>Партнеры</p>
                                                                    <div className="form-row padding-form">


                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault01">Партнерская комиссия</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault01"
                                                                                   value={this.state.partner_commission} required/>

                                                                        </div>
                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Дата истечения действия</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.partner_expire_date} required/>

                                                                        </div>


                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Партнер</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.partner} required/>

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                            <Tab eventKey="category" title="Категория" href="/nav-category"  tabClassName={'justify'}>
                                                                <div className={"container-fluid"}>
                                                                    <p className={'heading_for_form padding-form'}>Информация</p>
                                                                    <div className="form-row padding-form">

                                                                        <div className="col-md-4 mb-3 form-group all_input_field">
                                                                            <label className="" htmlFor="validationDefault02">Базовая комиссия</label>
                                                                            <input type="text" className=" form-control form-control-sm"
                                                                                   id="validationDefault02"
                                                                                   value={this.state.base_commission} required/>

                                                                        </div>
                                                                        <div className={"col-12 padding-form"}>
                                                                            <table className="table table-striped">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th scope="col">#</th>
                                                                                    <th scope="col">Категория продукта</th>
                                                                                    <th scope="col">Процент</th>

                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr>
                                                                                    <th scope="row">1</th>
                                                                                    <td>Категория 1</td>
                                                                                    <td>13</td>

                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">2</th>
                                                                                    <td>Категория 2</td>
                                                                                    <td>3</td>

                                                                                </tr>

                                                                                </tbody>
                                                                            </table>
                                                                            <div className={'padding-form'}>

                                                                                <Button className={'default_button'}>
                                                                                    ДОБАВИТЬ КАТЕГОРИЮ
                                                                                </Button>
                                                                            </div>

                                                                        </div>



                                                                    </div></div>
                                                            </Tab>

                                                        </Tabs>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>

                                        <div className="container-fluid ">
                                            <form className={"all_form "}>
                                                <div className={"product_variant"}>
                                                    <div className={"grid-item-2__product_variant__functional-icons "}>

                                                        <p className={'heading_for_form'} onClick={()=>this.operation_right()}>Склад</p>
                                                    </div>


                                                    <div className={"col  padding-form form-group"} data-validate={"Search"}>
                                                        <input className={"default_button"} type={"text"} id={"search_input"}
                                                               name={"search_input"} placeholder={"Поиск"}/>
                                                        <span className={"focus-input100"} data-placeholder="&#xf191;"></span>

                                                    </div>
                                                    <br/>




                                                    <div>
                                                        <table className="table table-striped">
                                                            <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Имя</th>
                                                                <th scope="col">Тип склада</th>

                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Склад 1</td>
                                                                <td>Тип 1</td>

                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>Склад 2</td>
                                                                <td>тип 2</td>

                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3</th>
                                                                <td>склад 3</td>
                                                                <td>тип 3</td>

                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>

                                    </>



                                    : null }


                                {this.state.key == 2?
                                    <>
                                        <div className="container-fluid ">
                                            <div className="raised-block ">
                                                <form className={"all_form "}>
                                                    <div className={"product_variant"}>
                                                        <div className={"grid-item-2__product_variant__functional-icons padding-form"}>
                                                            <p className={'heading_for_form'} onClick={()=>this.operation_right()}>Варианты продукта</p>

                                                        </div>
                                                        <div className={"col form-group padding-form "} data-validate={"Search"}>
                                                            <input className={"default_button "} type={"text"} id={"search_input"}
                                                                   name={"search_input"} placeholder={"Поиск"}/>
                                                            <span className={"focus-input100"} data-placeholder="&#xf191;"></span>

                                                        </div>
                                                        <div className={'padding-form'}>
                                                            <table className="table table-striped">
                                                                <thead>
                                                                <tr>
                                                                    <th scope="col">#</th>
                                                                    <th scope="col">Имя</th>
                                                                    <th scope="col">Первый атрибут</th>
                                                                    <th scope="col">Второй атрибут</th>

                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Вариант 1</td>
                                                                    <td>ПА1</td>
                                                                    <td>ВА1</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Вариант 2</td>
                                                                    <td>ПА2</td>
                                                                    <td>ВА1</td>

                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Вариант 3</td>
                                                                    <td>ПА3</td>
                                                                    <td>ВА1</td>

                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className={'padding-form'}>
                                                            <button
                                                                className={'default_button'}
                                                            >
                                                                РАЗВЕРНУТЬ
                                                            </button></div>
                                                        <div className="form-row  padding-form">

                                                            <div className="col ">
                                                                <button className={'default_button'}>ДОБАВИТЬ ОПЦИЮ</button>

                                                            </div>

                                                            <div className="col   ">

                                                                <button className={'default_button'}>ДОБАВИТЬ ВАРИАНТ</button>



                                                            </div>

                                                        </div>


                                                    </div>
                                                </form>
                                            </div>

                                        </div>



                                    </>



                                    : null }
                            </div>
                            :
                            null

                        }





                        {this.state.showRight && this.state.key == 1?
                            <div className="grid-item-3">





                                <form className={" padding-form all_form"} style={{marginTop:30}}>
                                    <h4 >Наименование склада</h4>

                                    <div className={'col padding-form'}>
                                        <button className={'default_button'}>СОХРАНИТЬ</button>
                                    </div>

                                        <div className="col mb-3">
                                            <p className={'heading_for_form'}>Общее</p>

                                        </div>





                                    <div className="form-group mb-2 all_input_field padding-form " >
                                        <label className="" htmlFor="validationDefault02">Имя</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               required/>


                                    </div>

                                    <div className="form-group mb-2 all_input_field">
                                        <label className="" htmlFor="validationDefault02">Получатель</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               value="Receiver" required/>


                                    </div>
                                    <div className="form-group mb-2 all_input_field">
                                        <label className="" htmlFor="validationDefault02">Номер телефона</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               value="Phone" required/>


                                    </div>


                                    <div className="form-group mb-2 all_input_field">
                                        <label className="" htmlFor="validationDefault02">Тип склада</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               value="Store Type" required/>


                                    </div>




                                    <div className={"grid-item-3__store__quantity-transition padding-form"}>
                                        <button className={"default_button mb-2 pl-2 pr-2"}>   <a onClick={() => this.handleModalShowHide()}>Посмотреть остатки </a> </button>
                                        <button className={"default_button pl-2 pr-2"}>    <a onClick={() => this.handleModalShowHide_options()}>Посмотреть транзакции </a></button>

                                    </div>

                                    <div>
                                        {/*<Button variant="primary" onClick={() => this.handleModalShowHide()}>
                                            Launch demo modal
                                        </Button>*/}

                                        <Modal show={this.state.showHide}>
                                            <Modal.Header className={"button-arrow_right_modal"} onClick={() => this.handleModalShowHide()}>
                                                <Modal.Title>Quantity</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>

                                                <form>

                                                    <table className="table table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Store Type</th>

                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr >
                                                            <th scope="row">1</th>
                                                            <td>Mark</td>
                                                            <td>Otto</td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Larry</td>
                                                            <td>the Bird</td>

                                                        </tr>
                                                        </tbody>
                                                    </table>

                                                </form>

                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button className={"button-arrow_right_modal"} onClick={() => this.handleModalShowHide()}>
                                                    Close
                                                </Button>
                                                <Button className={"button-arrow_right"} onClick={() => this.handleModalShowHide()}>
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                    </div>

                                    <div>


                                        <Modal show={this.state.showHide_option}>
                                            <Modal.Header className={"button-arrow_right_modal"} onClick={() => this.handleModalShowHide_options()}>
                                                <Modal.Title>Transition</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>

                                                <form>
                                                    <table className="table table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Store Type</th>

                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Mark</td>
                                                            <td>Otto</td>

                                                        </tr>

                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Larry</td>
                                                            <td>the Bird</td>

                                                        </tr>
                                                        </tbody>
                                                    </table>


                                                </form>

                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button className={"button-arrow_right_modal"} onClick={() => this.handleModalShowHide_options()}>
                                                    Close
                                                </Button>
                                                <Button className={"button-arrow_right"} onClick={() => this.handleModalShowHide_options()}>
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                    </div>
                                </form>


                                <form className={"all_form padding-form"}>
                                    <p className={'heading_for_form'}> Информация об отправке </p>



                                                <div className="form-group mb-2 all_input_field padding-form">
                                                    <label className="" htmlFor="validationDefault02">Метод доставки</label>
                                                    <input type="text" className=" form-control form-control-sm"
                                                           id="validationDefault02"
                                                           value="Post Method" required/>


                                                </div>
                                                <div className="form-group mb-2 all_input_field">
                                                    <label className="" htmlFor="validationDefault02">Адрес</label>
                                                    <input type="text" className=" form-control form-control-sm"
                                                           id="validationDefault02" placeholder="Address"
                                                           value="Address" required/>


                                                </div>
<div className={'padding-form'}>
    <button className={"default_button pl-2 pr-2padding-form  "} onClick={() => this.handleModalShowHide_add_address()}>
        Добавить метод
    </button></div>

                                                <div>


                                                    <Modal show={this.state.showHide_add_address}>
                                                        <Modal.Header  className={"button-arrow_right_modal"} onClick={() => this.handleModalShowHide_add_address()}>
                                                            <Modal.Title>Address</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>

                                                            <form className={"all_form"}>
                                                                <div className={"container-fluid"}>

                                                                    <div className={"col"}>


                                                                            <div className="form-group">

                                                                                <input type="text" className=" form-control form-control-sm"
                                                                                       id="validationDefault02" placeholder="Country"
                                                                                       required/>
                                                                                <label className="" htmlFor="validationDefault02">Country</label>
                                                                            </div>
                                                                            <div className="form-group">

                                                                                <input type="text" className=" form-control form-control-sm"
                                                                                       id="validationDefault02" placeholder="Postal Code"
                                                                                       required/>
                                                                                <label className="" htmlFor="validationDefault02">Postal Code</label>
                                                                            </div>

                                                                            <div className="form-group">

                                                                                <input type="text" className=" form-control form-control-sm"
                                                                                       id="validationDefault02" placeholder="Administrative Area"
                                                                                       required/>
                                                                                <label className="" htmlFor="validationDefault02">Administrative Area</label>
                                                                            </div>
                                                                            <div className="form-group">

                                                                                <input type="text" className=" form-control form-control-sm"
                                                                                       id="validationDefault02" placeholder="Settlement"
                                                                                       required/>
                                                                                <label className="" htmlFor="validationDefault02">Settlement</label>
                                                                            </div>

                                                                            <div className="form-group">

                                                                                <input type="text" className=" form-control form-control-sm"
                                                                                       id="validationDefault02" placeholder="Street"
                                                                                       required/>
                                                                                <label className="" htmlFor="validationDefault02">Street</label>
                                                                            </div>


                                                                            <div className="form-group">

                                                                                <input type="text" className=" form-control form-control-sm"
                                                                                       id="validationDefault02" placeholder="House"
                                                                                       required/>
                                                                                <label className="" htmlFor="validationDefault02">House</label>
                                                                            </div>

                                                                            <div className="form-group">

                                                                                <input type="text" className=" form-control form-control-sm"
                                                                                       id="validationDefault02" placeholder="Kladr Id"
                                                                                       required/>
                                                                                <label className="" htmlFor="validationDefault02">Kladr Id</label>
                                                                            </div>

                                                                            <div className="form-group">

                                                                                <input type="text" className=" form-control form-control-sm"
                                                                                       id="validationDefault02" placeholder="External Id"
                                                                                       required/>
                                                                                <label className="" htmlFor="validationDefault02">External Id</label>
                                                                            </div>
                                                                            <div className="form-group">

                                                                                <input type="text" className=" form-control form-control-sm"
                                                                                       id="validationDefault02" placeholder="Timezone"
                                                                                       required/>
                                                                                <label className="" htmlFor="validationDefault02">Timezone</label>
                                                                            </div>
                                                                        </div>


                                                                </div>








                                                            </form>

                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button className={"button-arrow_right_modal"} onClick={() => this.handleModalShowHide_add_address()}>
                                                                Close
                                                            </Button>
                                                            <Button className={"button-arrow_right"} onClick={() => this.handleModalShowHide_add_address()}>
                                                                Save Changes
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>



                                                </div>



                            </form>


                                <form className={"all_form padding-form "} >
                                    <p className={'heading_for_form padding-form'}>Время работы</p>

                                      <table className="table table-striped padding-form">
                                        <thead>
                                        <tr>
                                            <th scope="col">День</th>
                                            <th scope="col">Начало</th>
                                            <th scope="col">Конец</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr >
                                           <td>ПН</td>
                                            <td>8:00</td>
                                            <td>16:00</td>

                                        </tr>
                                        <tr>
                                            <td>ВТ</td>
                                            <td>9:00 </td>
                                            <td>18:00</td>

                                        </tr>

                                        </tbody>
                                    </table>
                                    <div className={"padding-form"}>

                                     <button className={'default_button'}>Добавить</button>

                            </div>





                                </form>


                            </div>

                            :

                            null}

                        {this.state.showRight && this.state.key == 2?

                                <div className="grid-item-3">





                                    <form className={" padding-form all_form"} style={{marginTop:30}}>
                                        <h4 >Наименование продукта</h4>
<div className={'padding-form'}>
    <button className={'default_button'}>СОХРАНИТЬ</button>
</div>





                                                <p className={'heading_for_form padding-form'}>Информация</p>



                                        <div className="form-group mb-2 all_input_field  padding-form " >
                                            <label className="" htmlFor="validationDefault02">Имя</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                   required/>


                                        </div>

                                        <div className="form-group mb-2 all_input_field">
                                            <label className="" htmlFor="validationDefault02">Бренд</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                   required/>


                                        </div>
                                        <div className="form-group mb-2 all_input_field">
                                            <label className="" htmlFor="validationDefault02">Категория</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                    required/>


                                        </div>


                                        <div className="form-group mb-2 all_input_field">
                                            <label className="" htmlFor="validationDefault02">Sku</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                              required/>


                                        </div>

                                        <div className="form-group mb-2 all_input_field">
                                            <label className="" htmlFor="validationDefault02">Штрих-код</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                   required/>


                                        </div>


                                        <div className="form-group mb-2 all_input_field">
                                            <label className="" htmlFor="validationDefault02">НДС</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                   required/>


                                        </div>
                                        <div className="form-group mb-2 all_input_field">
                                            <label className="" htmlFor="validationDefault02">Штрих-код</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                   required/>


                                        </div>


                                        <div className="form-group mb-2 all_input_field">
                                            <label className="" htmlFor="validationDefault02">Описание</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                   required/>


                                        </div>

                                        <div className="form-group mb-2 all_input_field">
                                            <label className="" htmlFor="validationDefault02">Активный</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                   required/>


                                        </div>

                                        <div className="form-group mb-2 all_input_field">
                                            <label className="" htmlFor="validationDefault02">Включает НДС</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                   required/>


                                        </div>

<hr/>
                                        <p className={'heading_for_form padding-form'}>Стоимость</p>

                                        <div className="form-group mb-2 all_input_field padding-form">
                                            <label className="" htmlFor="validationDefault02">Цена</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                   required/>


                                        </div>

                                        <div className="form-group mb-2 all_input_field">
                                            <label className="" htmlFor="validationDefault02">Старая цена</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                   required/>


                                        </div>
<hr/>
                                        <p className={'heading_for_form padding-form'}>Атрибуты</p>

                                        <div className="form-group mb-2 all_input_field padding-form">
                                            <label className="" htmlFor="validationDefault02">Первый атрибут</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                   required/>


                                        </div>

                                        <div className="form-group mb-2 all_input_field">
                                            <label className="" htmlFor="validationDefault02">Второй атрибут</label>
                                            <input type="text" className=" form-control form-control-sm"
                                                   id="validationDefault02"
                                                   required/>


                                        </div>











                                    </form>




                                </div>

                        :
                        null}

                        {this.state.showRight && this.state.key == 3?

                            <div className="grid-item-3">





                                <form className={" padding-form all_form"} style={{marginTop:30}}>
                                    <h4 >Номер поставки</h4>
<div className={'padding-form'}>
    <button className={'default_button '}>СОХРАНИТЬ</button>
</div>









                                    <div className="form-group mb-2 all_input_field padding-form" >
                                        <label className="" htmlFor="validationDefault02">Заказ</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               required/>


                                    </div>

                                    <div className="form-group mb-2 all_input_field">
                                        <label className="" htmlFor="validationDefault02">Статус</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               required/>


                                    </div>
                                    <div className="form-group mb-2 all_input_field">
                                        <label className="" htmlFor="validationDefault02">Склад</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               required/>


                                    </div>


                                    <div className="form-group mb-2 all_input_field">
                                        <label className="" htmlFor="validationDefault02">Тип доставки</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               required/>


                                    </div>

                                    <div className="form-group mb-2 all_input_field">
                                        <label className="" htmlFor="validationDefault02">Забор</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               required/>


                                    </div>


                                    <div className="form-group mb-2 all_input_field">
                                        <label className="" htmlFor="validationDefault02">Id пакета</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               required/>


                                    </div>
                                    <div className="form-group mb-2 all_input_field">
                                        <label className="" htmlFor="validationDefault02">Ссылка на этикетку</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               required/>


                                    </div>


                                    <div className="form-group mb-2 all_input_field">
                                        <label className="" htmlFor="validationDefault02">Комментарий</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               required/>


                                    </div>

                                    <div className="form-group mb-2 all_input_field">
                                        <label className="" htmlFor="validationDefault02">Дата создания</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               required/>


                                    </div>

                                    <div className="form-group mb-2 all_input_field">
                                        <label className="" htmlFor="validationDefault02">Дата завершения</label>
                                        <input type="text" className=" form-control form-control-sm"
                                               id="validationDefault02"
                                               required/>


                                    </div>
<p  className="all_input_field padding-form"> Индекс, Административная область, поселение, улица, дом.</p>

                                    <p className={'heading_for_form padding-form'}>Продукт</p>

                                    <div className={'padding-form'}>
                                        <table className="table table-striped ">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Продукт</th>
                                                <th scope="col">Сумма</th>


                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Продукт 1</td>
                                                <td>1212</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Продукт 2</td>
                                                <td>12</td>


                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Продукт 3</td>
                                                <td>ПА3</td>


                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={'padding-form'}>
                                        <button
                                            className={'default_button'}
                                        >
                                            ПОДРОБНЕЕ
                                        </button>
                                    </div>















                                </form>




                            </div>

                            :
                            null}







                    </div>
                </div>




            </div>

        );
    }
}

export default connect(null,{loadLeft})(Vendor);