import React, { Component } from "react";
import Form_login from "./component/Login/Form_login";
import Form_forgot_password from "./component/Login/Form_forgot_password";
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Widget from "./component/all/Widget";
import Form_new_password from "./component/Login/Form_new_password";
import {PrivateRoute} from "./PrivateRoute";
import Vendor from "./component/all/Vendor";
import Product from "./component/all/Product";
import Payment from "./component/all/Payment";
import Tables from "./component/all/Tables";
import Supply from "./component/all/Supply";
//https://react-icons.github.io/icons?name=bs    иконки   https://github.com/react-icons/react-icons
import  {Provider} from "react-redux";

import  store from "./store/configureStore";
import Product_Vendor from "./component/all/Product_Vendor";
import Payment_Vendor from "./component/all/Payment_Vendor";
import Supply_Vendor from "./component/all/Supply_Vendor";
import Order from "./component/all/Order";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value:""};
    }
render(){
    return(
        <Provider store={store}>
        <Router>
            <div className="App">
                <Route
                    exact
                    path="/"
                    render={() => {
                        return (
                            // this.state.isLogin ?
                            <Redirect to="/login" />
                           // :
                          //  <Redirect to="/" />;

                        )
                    }}
                />
                <Route path="/login" exact  component={Form_login}/>
                <PrivateRoute path="/forgot"  component={Form_forgot_password}/>
                <PrivateRoute path="/new_pass"  component={Form_new_password}/>

                <PrivateRoute path="/widget"  component={Widget}/>
                <PrivateRoute path="/vendor"  component={Vendor}/>
                <PrivateRoute path="/product"  component={Product}/>
                <PrivateRoute path="/payment"  component={Payment}/>
                <PrivateRoute path="/tables"  component={Tables}/>
                <PrivateRoute path="/supply"  component={Supply}/>
                <PrivateRoute path="/product_vendor"  component={Product_Vendor}/>

                <PrivateRoute path="/payment_vendor"  component={Payment_Vendor}/>
                <PrivateRoute path="/supply_vendor"  component={Supply_Vendor}/>

                <PrivateRoute path="/tables/product"  component={Tables}/>
                <PrivateRoute path="/test"  component={Order}/>
        </div>
</Router>
        </Provider>
)
}}
//FormContainer    Form_login
export default App;