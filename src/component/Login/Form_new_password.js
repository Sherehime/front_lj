import React from 'react';
import logo from '../../img/logo_white.png';
//import './Form_login.css';
//import './Form_login_add.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaKey } from 'react-icons/fa';
import './Form_login.css';

//https://react-icons.github.io/icons?name=bs    иконки
const  Form_new_password =()=>{
    return (
        <div className="wrapper gdBFSQ">
            <form className="wrapper-container">
					<span className="logo_login">
                         <img  className={"logo_login"}  src="data:image/svg+xml,%3Csvg width='151' height='84' viewBox='0 0 151 84' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M0 29.4331L0.657952 84L151 75.7323L143.434 17.8583L0 29.4331Z' fill='url(%23paint0_linear)'/%3E %3Cpath d='M88.1293 73.7976L101.519 72.7692L99.6533 46.0247L111.427 72.0151L117.477 71.658L125.55 44.2158L127.412 70.7551L140.983 69.9317L137.693 24.9818L119.053 26.4203L112.72 48.2636L103.627 27.558L84.7178 28.9106L88.1293 73.7976Z' fill='white'/%3E %3Cpath d='M65.8412 30.2897L48.7937 31.5927L35.6248 77.5116L50.9649 76.493L52.1492 71.0495L68.2526 69.9053L70.2528 75.1073L85.5304 73.8804L65.8412 30.2897ZM54.9784 59.0382L58.3109 44.2853L63.7687 58.3834L54.9784 59.0382Z' fill='white'/%3E %3Cpath d='M19.1827 33.7389L32.6905 32.7699L34.8156 61.5912C34.8156 61.5912 36.2697 71.1321 29.1211 76.3077C21.9724 81.4833 9.91546 80.2133 6.01709 76.9625L10.7478 66.231C10.7478 66.231 13.6164 67.8647 15.6133 67.8448C17.5674 67.825 20.3736 67.286 21.0973 64.0715C21.1237 63.9557 21.3474 63.0297 21.252 62.1897C21.1105 60.986 19.1827 33.7389 19.1827 33.7389Z' fill='white'/%3E %3Cpath opacity='0.5' d='M10.5272 33.0709L10.1982 39.6851L77.9673 30.756L75.3355 23.1497' fill='%23920074'/%3E %3Cpath d='M6.25049 5.29134L6.57946 35.0551L74.6775 28.4409L64.4792 0L6.25049 5.29134Z' fill='%23E40097'/%3E %3Cpath d='M10.7246 11.2012L12.409 28.279L23.9495 27.1744L23.5744 22.6702L17.1232 23.3051L15.9093 10.6754L10.7246 11.2012Z' fill='white'/%3E %3Cpath d='M24.4263 9.78247L29.5649 9.31287L31.2624 26.3543L26.1402 26.9727L24.4263 9.78247Z' fill='%23FEFEFE'/%3E %3Cpath d='M30.575 9.28634L36.4044 8.67452L41.2206 19.7467L43.7537 7.98004L49.6161 7.36823L45.0927 25.0578L38.4868 25.663L30.575 9.28634Z' fill='%23FEFEFE'/%3E %3Cpath d='M50.5439 7.30542L52.2546 24.4328L65.0946 23.1067L64.6307 18.6388L56.8833 19.4424L56.7254 17.5475L64.3149 16.7207L63.7885 12.2561L56.3833 13.0763L56.1365 11.3731L63.851 10.5728L63.3839 6.04211L50.5439 7.30542Z' fill='%23FEFEFE'/%3E %3Cdefs%3E %3ClinearGradient id='paint0_linear' x1='0' y1='50.9291' x2='151' y2='50.9291' gradientUnits='userSpaceOnUse'%3E %3Cstop stop-color='%239B00D4'/%3E %3Cstop offset='0.2624' stop-color='%23B302AE'/%3E %3Cstop offset='0.5568' stop-color='%23C9048B'/%3E %3Cstop offset='0.7975' stop-color='%23D70675'/%3E %3Cstop offset='0.9525' stop-color='%23DC066D'/%3E %3C/linearGradient%3E %3C/defs%3E %3C/svg%3E"
                         />

					</span>

                <div className="login_input_pass" data-validate="Enter password">
                    <input className="" type="password" name="pass" placeholder="Password" />
                    <span className="focus-input100" data-placeholder="&#xf191;"></span>
                </div>

                <div className="button">
                    <button className="button-login" >
                        Ok
                    </button>
                </div>
            </form>
        </div>

    );
}


export default Form_new_password;
