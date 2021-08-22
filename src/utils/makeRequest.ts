import { Auth } from 'aws-amplify';

const baseUrl = 'http://localhost:3005';
export default {
    getJwtToken() {
        let tokenObj;
        Auth.currentSession().then((resp: any) => {
            tokenObj = resp?.idToken?.jwtToken;
        }).catch(error => {tokenObj = ''; console.log(error);   })
        return tokenObj;
    },
    async get(URL: string) {
        return fetch(`${baseUrl}${URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }).then(response => response.json())
    },
    async post(URL: string, values: any) {
        return fetch(`${baseUrl}${URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            },
            body: JSON.stringify(values),
        }).then(response => response.json())
    },
    async put(URL: string, values: any) {
        return fetch(`${baseUrl}${URL}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            },
            body: JSON.stringify(values),
        }).then(response => response.json())
    },
    async delete(URL: string, values: any) {
        return fetch(`${baseUrl}${URL}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            },
            body: JSON.stringify(values),
        }).then(response => response.json())
    }
}