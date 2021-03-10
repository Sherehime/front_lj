import  {REQUEST_ORDER,
    LOAD_ORDER_TRUE,
    LOAD_ORDER_FALSE,

    REQUEST_SUPPLY,
    LOAD_SUPPLY_TRUE,
    LOAD_SUPPLY_FALSE,

    REQUEST_PAYMENT,
    LOAD_PAYMENT_TRUE,
    LOAD_PAYMENT_FALSE
    } from './index';





//order

//Get
export const requestData_order = () => {
    return {
        type: REQUEST_ORDER
    }
};

export const receiveData_order = (json) => {
    return {
        type: LOAD_ORDER_TRUE,
        skipToken: json.data.after,
        data: json.data.children
    }
};

export const receiveError_order = (error) => {
    return {
        type: LOAD_ORDER_FALSE,
        skipToken: '',
        error: error,
        data: []
    }
};

//supply

export const requestData_supply = () => {
    return {
        type: REQUEST_SUPPLY
    }
};

export const receiveData_supply = (json) => {
    return {
        type: LOAD_SUPPLY_TRUE,
        skipToken: json.data.after,
        data: json.data.children
    }
};

export const receiveError_supply = (error) => {
    return {
        type: LOAD_SUPPLY_FALSE,
        skipToken: '',
        error: error,
        data: []
    }
};

//payment



export const requestData_payment = () => {
    return {
        type: REQUEST_PAYMENT
    }
};

export const receiveData_payment = (json) => {
    return {
        type: LOAD_PAYMENT_TRUE,
        skipToken: json.data.after,
        data: json.data.children
    }
};

export const receiveError_payment = (error) => {
    return {
        type: LOAD_PAYMENT_FALSE,
        skipToken: '',
        error: error,
        data: []
    }
};
//post
//


