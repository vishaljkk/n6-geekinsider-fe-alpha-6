import { Auth } from 'aws-amplify';

const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3005';

export default {
  async get(URL: string) {
    return fetch(`${baseUrl}${URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`
      }
    }).then((response) => response.json());
  },

  async post(URL: string, values: any) {
    return fetch(`${baseUrl}${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`
      },
      body: JSON.stringify(values)
    }).then((response) => response.json());
  },

  async put(URL: string, values: any) {
    return fetch(`${baseUrl}${URL}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`
      },
      body: JSON.stringify(values)
    }).then((response) => response.json());
  },

  async delete(URL: string, values: any) {
    return fetch(`${baseUrl}${URL}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`
      },
      body: JSON.stringify(values)
    }).then((response) => response.json());
  }
};
