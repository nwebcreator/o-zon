const getData = () => {
    return fetch('http://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        return response.json();
    });
};

export default getData;