import axios from 'axios';

const baseURL = 'http://localhost:64950/api/';

export const api = {

    get:(uri) => {
        const url = baseURL + uri;
        return axios.get(url).then(resp => {
            return resp.data;
        }).catch(err => {
            throw err.message;
        });
    }
} 