const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send("Hey I think you're really sexy - Welcome to the home page babe");
})


const port = process.env.port;
app.listen(port, () => {
    console.log("wazszszappp");
});


