import {thunk_api} from './api';

export const getStudentByIdAsync = (Id, dispatchStart, dispatchSuccess, dispatchFailure) => {
    const buildUri = `Student/GetStudentByRollNumber?rollNumber=${Id}`;
    return thunk_api.get(buildUri, dispatchStart, dispatchSuccess, dispatchFailure);
};


