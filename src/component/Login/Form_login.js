import React from 'react';
//import './Form_login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login_component from './login_component';
import saveToken from "./saveToken";


import cogoToast from 'cogo-toast';



import 'react-notifications/lib/notifications.css';

//https://react-icons.github.io/icons?name=bs    иконки
//https://cogoport.github.io/cogo-toast/?ref=madewithreactjs.com     сообщения
const  DLINK ="dev-sw.landpro.site";



class Form_login extends React.Component {

 state ={
        access_token: '',
        expires_in: 0,    //время жизни токенна
        refresh_token: '',
        isLogin: false
    }

   CreateSession = async (e)=> {
       e.preventDefault();
       const login = e.target.elements.username.value;
       const pass = e.target.elements.pass.value;
       console.log(login, pass)


       const api_url = await  // client_id   client_secret
           fetch(`https://${DLINK}/create-client`, {
               method: 'POST'
           });
       const data = await api_url.json();


       if (data.client_id && data.client_secret ) {
           const  CI = data.client_id;
           const  CS = data.client_secret;
           fetch(`https://${DLINK}/oauth/v2/token`, {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
            },//x-www-form-urlencoded
            body: JSON.stringify({
                grant_type: 'password',
                client_id: CI ,
                client_secret: CS,
                username: login,
                password: pass

            }),
        })
            .then((res) => {
                if (res.status === 200) {
                    const tokenData  =   res.json();

                    return Promise.resolve(tokenData);
                }

                  //  const dddd = JSON.parse(sessionStorage.tokenData);

               return Promise.reject(cogoToast.info("Wrong login or password", { position: 'top-right'}));

            })
                .then( res =>{
                    console.log(res);
                    document.getElementById("username_input").value = "";
                    document.getElementById("password_input").value = "";
                    this.setState({
                        access_token: res.access_token,
                        expires_in: res.expires_in,    //время жизни токенна
                        refresh_token: res.refresh_token,
                        isLogin: true
                    });

                    console.log(this.state.expires_in);
                    saveToken(JSON.stringify(this.state.isLogin)); // в sessionStorage записываем данные
                    const { history } = this.props;
                   if  (localStorage.getItem("tokenData"))   {  history.push('/widget');}
                   else  {  history.push('/login');}

                  //  const dddd = JSON.parse(sessionStorage.tokenData);

                })
           .catch(e => {
               document.getElementById("username_input").value = "";
               document.getElementById("password_input").value = "";
               console.log(e);
           });
    }
    else
{console.log('Сервер не отвечает') ;
    cogoToast.info("Server not found", { position: 'top-right' });
    document.getElementById("username_input").value = "";
    document.getElementById("password_input").value = "";}
}

    render() {
    return (
        <div className={"wrapper"}>
        <Login_component create_user = {this.CreateSession}/>
        </div>
    );
}
}

export default Form_login;