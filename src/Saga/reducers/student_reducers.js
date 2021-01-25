import * as actiontypes from '../actioncreators/actiontypes';

export const studentReducer =(state, action)=>{
    //let newState = {...state};
    switch (action.type) {
        case actiontypes.FETCH_STUDENT_START:
            return {...state,  isLoading: true};
        
        case actiontypes.FETCH_STUDENT_SUCCESS:
            return {...state, user: action.payload, isLoading: false, error: false, erroMsg: null};
        
        case actiontypes.FETCH_STUDENT_FAILURE:
            return {...state, user: null, isLoading: false, error: true, erroMsg: action.payload};
        
        default:
            return {...state};
    }
}