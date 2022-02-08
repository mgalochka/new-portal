
import { IStore } from "./types";
import { AnyAction } from "redux";
const initialState = {
    list: [],
}

const newsReducer = (state = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'news/setNews':
            return {...state, list: [...action.payload]}
        default:
            return state;    
    }
}

export default newsReducer;