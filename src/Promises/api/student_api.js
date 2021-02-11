import {api} from './api';

export const getStudentByIdAsync = async (Id) => {
    const buildUri = `Student/GetStudentByRollNumber?rollNumber=${Id}`;
    return api.get(buildUri);
};


