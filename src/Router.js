import Form_login from "./component/Login/Form_login";
import Start_page from "./component/all/Start_page";
import Vendor from "./component/all/Vendor";
import Product from "./component/all/Product";
import Order from "./component/all/Order";
import Payment from "./component/all/Payment";
import Tables from "./component/all/Tables";

import App from "./App";

export default [
    {
        component: App,
        routes : [
            {
                component: Form_login,
                path: '/login',

            },
            {
               component: Start_page,
               path: '/' ,
                exact: true
            },
            {
                component: Vendor,
                path:'/vendor'

            },
            {
                component: Product,
                path:'/product'
            },
            {
                component: Order,
                path:'/order'
            },
            {
                component: Payment,
                path:'/payment'
            },
            {
                component: Tables,
                path:'/tables'
            },

        ]
    }
];