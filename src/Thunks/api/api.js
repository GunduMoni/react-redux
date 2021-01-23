import axios from 'axios';

const baseURL = 'http://localhost:64950/api/';

export const thunk_api = {

    get: (uri, dispatchStart, dispatchSuccess, dispatchFailure) =>{
    
        return async dispatch => {
          dispatch(dispatchStart());
          
          try{
            const url = baseURL + uri;
            const response = await axios.get(url);
            
            dispatch(dispatchSuccess(response.data));
          }
          catch(err){
            
            dispatch(dispatchFailure(err.message));
          }
        }
    }
} 