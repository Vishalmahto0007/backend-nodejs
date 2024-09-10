const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to the server");
        return; // End the function after sending the response
    } 
    else if (req.url === '/about') {
        res.end("Here to our about");
        return;
    }

    // Handle all other routes with a 404-like response
    res.end(`
        <h1> OOPS </h1>
        <p>Something went wrong</p> 
        <a href="/">Back home</a>
    `)
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});
