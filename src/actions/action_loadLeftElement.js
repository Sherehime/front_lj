import  {LOAD_LEFT_ELEMENT,REDIRECT_FROM_PARENT_TABLE} from './index';

export function loadLeft(text){
    return {
        type: LOAD_LEFT_ELEMENT, text: text
    }
}