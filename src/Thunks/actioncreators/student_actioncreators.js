import * as actiontypes from './actiontypes';
import {getStudentByIdAsync} from '../api/student_api';


export const fetchStudent = (Id) => {
    return getStudentByIdAsync(Id);
};

export const fetchStudentStart = () => {
    return {type: actiontypes.FETCH_STUDENT_START, payload: null};
};

export const fetchStudentSuccess = (data) => {
    return {type: actiontypes.FETCH_STUDENT_SUCCESS, payload: data};
};

export const fetchStudentFailure = (error) => {
    return {type: actiontypes.FETCH_STUDENT_FAILURE, payload: error};
};
