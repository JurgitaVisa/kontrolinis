
import axios from 'axios';
// import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 404 && error.response.status < 500;

    if (!expectedError) {
        console.log("Logging error", error);
        alert('Įvyko klaida, puslapis nurodytu adresu nepasiekiamas');
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
