 import  {LOAD_LEFT_ELEMENT,REDIRECT_FROM_PARENT_TABLE} from '../actions/index';

const  initialState ={
    items:[],
    item: {}
};

export default  function (state = initialState,action){
    switch (action.type){
        case LOAD_LEFT_ELEMENT:
            return {
                ...state,
                item: action.text
            }
        default:
            return state;
    }
}