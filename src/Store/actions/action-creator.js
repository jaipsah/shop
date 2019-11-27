import { LOAD_LIST, CREATE_CARD } from "./actions";

export const headerAction = ()=> ({ type: LOAD_LIST, payload: 10});
export const mainAction = (length)=> ({ type: CREATE_CARD, payload: {id:Math.round(Math.random()*10000000) ,img:'/', title:'Testing cards.'}});
