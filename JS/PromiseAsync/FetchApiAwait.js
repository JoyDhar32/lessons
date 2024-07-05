const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const fetchData = async (API_URL) => {
    try{
    const response = await fetch(API_URL);
    const data = await response.json();
    data.forEach(post => {
        console.log(`Id: ${post.id} Title: ${post.title}`)
    })
}catch(error){
    console.log(error);
}
finally{
    console.log('API call completed');
}
}
fetchData(API_URL);

// ⭐ Fetch API async await ⭐