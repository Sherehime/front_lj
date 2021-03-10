import {
   REQUEST_VENDOR,
    LOAD_VENDOR_FALSE,
    LOAD_VENDOR_TRUE,
    REQUEST_STORE,
    LOAD_STORE_FALSE,
    LOAD_STORE_TRUE,
    REQUEST_CONTRACT,
    LOAD_CONTRACT_TRUE,
    LOAD_CONTRACT_FALSE
} from './index';








//vendor

//Get
export const requestData_vendor = () => {
    return {
        type: REQUEST_VENDOR
    }
};

export const receiveData_vendor = (json) => {
    return {
        type: LOAD_VENDOR_TRUE,
        skipToken: json.data.after,
        data: json.data.children
    }
};

export const receiveError_vendor = (error) => {
    return {
        type: LOAD_VENDOR_FALSE,
        skipToken: '',
        error: error,
        data: []
    }
};


//srote

//Get
export const requestData_srote = () => {
    return {
        type: REQUEST_STORE
    }
};

export const receiveData_srote = (json) => {
    return {
        type: LOAD_STORE_TRUE,
        skipToken: json.data.after,
        data: json.data.children
    }
};

export const receiveError_srote = (error) => {
    return {
        type: LOAD_STORE_FALSE,
        skipToken: '',
        error: error,
        data: []
    }
};



//CONTRACT
export const requestData_contract = () => {
    return {
        type: REQUEST_CONTRACT
    }
};

export const receiveData_contract = (json) => {
    return {
        type: LOAD_CONTRACT_TRUE,
        skipToken: json.data.after,
        data: json.data.children
    }
};

export const receiveError_contract = (error) => {
    return {
        type: LOAD_CONTRACT_FALSE,
        skipToken: '',
        error: error,
        data: []
    }
};

