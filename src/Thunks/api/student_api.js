import {api} from './api';
import * as actionCreators from '../actioncreators/student_actioncreators';

export const getStudentByIdAsync = (Id) => async (dispatch) => {
    const buildUri = `Student/GetStudentByRollNumber?rollNumber=${Id}`;
    dispatch(actionCreators.fetchStudentStart());
    try{
        const data = await api.get(buildUri);
        dispatch(actionCreators.fetchStudentSuccess(data));
    }
    catch(errMsg){
        dispatch(actionCreators.fetchStudentFailure(errMsg));
    }
};


