const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send('Connect to API');
});


app.listen(port, () => {
    console.log(`Succesfull start in http://localhost:${port}`);
})