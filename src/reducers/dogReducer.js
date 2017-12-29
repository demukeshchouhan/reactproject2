import * as constant from "../actions/const";

const initialState = {
    dogs : [
        {
            id : 1,
            fullname : "Dog's default full name",
            nickname : "santa",
            color : "white",
            height : null,
            width : null,
            age : 1,
            location : "",
            breed : "Asian"
        }
    ],
    data : {}
    
};

const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case constant.GET_ALL_DOGS:
            return {
                ...state,
                data : Object.assign({}, ...state.data, action.payload)
            };
            break;

        case constant.ADD_NEW_DOG:
            return {
                ...state,
                dogs : [...state.dogs, action.payload]
            }
            
        default:
            return state;
    }
}

export default dogReducer;