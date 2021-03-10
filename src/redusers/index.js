import {combineReducers} from "redux";
import loadLeftElement from "./loadLeftElement";
import loadOrderElement from "./loadOrderElement";
import loadSupplyElement from "./loadSupplyElement";
import loadPaymentElement from "./loadPaymentElement";

export default  combineReducers({
    loadLeftElement : loadLeftElement,
    loadOrderElement:loadOrderElement,
    loadSupplyElement: loadSupplyElement,
    loadPaymentElement:loadPaymentElement


});