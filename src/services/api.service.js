export class ApiService {
    _url = 'https://jsonplaceholder.typicode.com';

    getUsers(endpoint) {
        return fetch(`${this._url}/${endpoint}`)
            .then(response => response.json())
    }

    getPosts(endpoint) {
        return fetch(`${this._url}/${endpoint}`)
            .then(response => response.json())
    }

    getComments(endpoint) {
        return fetch(`${this._url}/${endpoint}`)
            .then(response => response.json())
    }
}