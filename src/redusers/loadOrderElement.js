 import  * as ActionTypes from '../actions/index';

 const getInitialState = () => {
     return {
         reddit: {
             isFetching: false,
             data: [],
             skipToken: '',
             error: {}
         },
     }
 };



 export default function (state = getInitialState(), action) {
     switch (action.type) {
         case ActionTypes.REQUEST_ORDER:
             return {
                 reddit: {
                     isFetching: true,
                     data: [],
                     error: {}
                 }
             };

         case ActionTypes.LOAD_ORDER_TRUE:
             return {
                 reddit: {
                     isFetching: false,
                     data: action.data
                 }
             }

         case
         ActionTypes.LOAD_ORDER_FALSE:
             return {
                 reddit: {
                     isFetching: false,
                     data: [],
                     error: action.error
                 }
             };

         default:
             return state;
     }
 }

