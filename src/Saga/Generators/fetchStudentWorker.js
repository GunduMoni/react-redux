import {getStudentByIdAsync} from '../api/student_api';
import {call, put} from 'redux-saga/effects';
import * as actioncreators from '../actioncreators/student_actioncreators';

export function * fetchStudentWorker(action){
    try{
        yield put(actioncreators.fetchStudentStart());
        const data = yield call(getStudentByIdAsync, action.payload);
        yield put(actioncreators.fetchStudentSuccess(data));
    }
    catch(errorMessage){
        yield put(actioncreators.fetchStudentFailure(errorMessage));
    }
} 