import {
    receiveData_order, receiveData_payment, receiveData_supply,
    receiveError_order, receiveError_payment, receiveError_supply,
    requestData_order, requestData_payment,
    requestData_supply
} from "../../../actions/acton_payment";

export const fetch_order_Data = () => (dispatch, getState) => {
    dispatch(requestData_order());
    return fetch("https://www.reddit.com/subreddits/popular/.json")
        .then(response => response.json())
        .then(responseJson => {
            dispatch(receiveData_order(responseJson))
        })
        .catch(error => {
            dispatch(receiveError_order(error))
        });
};

export const fetch_supply_Data = () => (dispatch, getState) => {
    dispatch(requestData_supply());
    return fetch("https://www.reddit.com/subreddits/popular/.json")
        .then(response => response.json())
        .then(responseJson => {
            dispatch(receiveData_supply(responseJson))
        })
        .catch(error => {
            dispatch(receiveError_supply(error))
        });
};

export const fetch_payment_Data = () => (dispatch, getState) => {
    dispatch(requestData_payment());
    return fetch("https://www.reddit.com/subreddits/popular/.json")
        .then(response => response.json())
        .then(responseJson => {
            dispatch(receiveData_payment(responseJson))
        })
        .catch(error => {
            dispatch(receiveError_payment(error))
        });
};