import {
    LOAD_OPTIONS_FALSE,
    LOAD_OPTIONS_TRUE,
    LOAD_PRODUCT_FALSE,
    LOAD_PRODUCT_TRUE,
    LOAD_PRODUCT_VARIANT_FALSE,
    LOAD_PRODUCT_VARIANT_TRUE, LOAD_VARIANT_OPTIONS_FALSE,
    LOAD_VARIANT_OPTIONS_TRUE,
    REQUEST_OPTIONS,
    REQUEST_PRODUCT,
    REQUEST_PRODUCT_VARIANT,
    REQUEST_VARIANT_OPTIONS

} from './index';








//product

//Get
export const requestData_product = () => {
    return {
        type: REQUEST_PRODUCT
    }
};

export const receiveData_product = (json) => {
    return {
        type: LOAD_PRODUCT_TRUE,
        skipToken: json.data.after,
        data: json.data.children
    }
};

export const receiveError_product = (error) => {
    return {
        type: LOAD_PRODUCT_FALSE,
        skipToken: '',
        error: error,
        data: []
    }
};


//product_variant

//Get
export const requestData_product_variant = () => {
    return {
        type: REQUEST_PRODUCT_VARIANT
    }
};

export const receiveData_product_variant = (json) => {
    return {
        type: LOAD_PRODUCT_VARIANT_TRUE,
        skipToken: json.data.after,
        data: json.data.children
    }
};

export const receiveError_product_variant = (error) => {
    return {
        type: LOAD_PRODUCT_VARIANT_FALSE,
        skipToken: '',
        error: error,
        data: []
    }
};



//options
export const requestData_options = () => {
    return {
        type: REQUEST_OPTIONS
    }
};

export const receiveData_options = (json) => {
    return {
        type: LOAD_OPTIONS_TRUE,
        skipToken: json.data.after,
        data: json.data.children
    }
};

export const receiveError_options = (error) => {
    return {
        type: LOAD_OPTIONS_FALSE,
        skipToken: '',
        error: error,
        data: []
    }
};

//variant_options

export const requestData_variant_options = () => {
    return {
        type: REQUEST_VARIANT_OPTIONS
    }
};

export const receiveData_variant_options = (json) => {
    return {
        type: LOAD_VARIANT_OPTIONS_TRUE,
        skipToken: json.data.after,
        data: json.data.children
    }
};

export const receiveError_variant_options = (error) => {
    return {
        type: LOAD_VARIANT_OPTIONS_FALSE,
        skipToken: '',
        error: error,
        data: []
    }
};