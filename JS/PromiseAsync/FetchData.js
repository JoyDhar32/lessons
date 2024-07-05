// Code to fetch data from an API using fetch method

const FetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
        .finally(() => console.log('API call completed'));
}

FetchData();

// ⭐ Fetch API Traditional Method ⭐