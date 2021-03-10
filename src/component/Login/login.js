import React from "react";
import ReactDOM from 'react-dom';
import logo from "../../img/logo_white.png";
import {BsFillPersonFill} from "react-icons/bs/index";
import {FaKey} from "react-icons/fa/index";
import {Link} from "react-router-dom";
//import './Form_login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "../../PrivateRoute";


class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        alert(`Сообщение успешно отправлено получателю "${this.state.email}"`);
        event.preventDefault();
    }

    onChangeMessage(event){
        this.setState({message: event.target.value});
    }

    onChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    render() {
        return (
            <form className="wrapper-container">
					<span className="logo_login">
                        <img   src={logo}/>

					</span>
                <hr className="hr_logo"/>
                <div className="login_input" data-validate="Enter username">
                    <BsFillPersonFill/>  <input className="" type="text" name="username" placeholder="Email"  />

                    <span className="" data-placeholder="&#xf207;"></span>
                </div>
                <div className="login_input" data-validate="Enter password">
                    <FaKey/>  <input className="" type="password" name="pass" placeholder="Password"  />
                    <span className="focus-input100" data-placeholder="&#xf191;"></span>
                </div>
                <div className="button">
                    <button className="button-login">
                        Login
                    </button>
                </div>
                <div className="login__forgot_pass">
                    <a className="" >
                        <u> <Link to="/forgot">Forgot Password?</Link></u>
                    </a>
                </div>
            </form>


      /*      <form onSubmit={this.onSubmit}>
                <p><label> email получателя: <input type="text" name="email" value={this.state.email}
                                                    onChange={this.onChangeEmail}/></label></p>
                <p><label>Текст сообщения: <textarea type="text" name="message" value={this.state.message}
                                                     onChange={this.onChangeMessage}/></label></p>
                <p><input type="submit" value="Submit" /></p>
            </form>*/
        );
    }
}

//ReactDOM.render(<MessageForm />,  document.getElementById('root'));