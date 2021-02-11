import * as actiontypes from './actiontypes';
import {getStudentByIdAsync} from '../api/student_api';

export const fetchStudent = (Id) => {
    return {type: getStudentByIdAsync, payload: Id, 
        processCallStack:{
            Start: fetchStudentStart,
            Success: fetchStudentSuccess,
            Failure: fetchStudentFailure
        }
    };
};

export const fetchStudentStart = () => {
    return {type: actiontypes.FETCH_STUDENT_START, payload: undefined};
};

export const fetchStudentSuccess = (data) => {
    return {type: actiontypes.FETCH_STUDENT_SUCCESS, payload: data};
};

export const fetchStudentFailure = (error) => {
    return {type: actiontypes.FETCH_STUDENT_FAILURE, payload: error};
};
