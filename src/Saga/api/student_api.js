import {api} from './api';

export const getStudentByIdAsync = async (Id) => {
    const buildUri = `Student/GetStudentByRollNumber?rollNumber=${Id}`;
    try{
        const response = await api.get(buildUri);
        return response.data;
    }
    catch(error){
        throw error.message;
    }
};


