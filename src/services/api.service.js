function ApiService(endpoint) {
    this.getAllData = () => fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(value => value.json())
}

export default ApiService;