const fetchData = async () => {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
fetchData();

// ⭐ Fetch API async await ⭐