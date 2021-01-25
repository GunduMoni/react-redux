import {all, takeEvery} from 'redux-saga/effects';
import {fetchStudentWorker} from './fetchStudentWorker';
import * as actiontypes from '../actioncreators/actiontypes';

export function * watcher(){
    yield all([
        takeEvery(actiontypes.FETCH_STUDENT, fetchStudentWorker)
    ]);
}