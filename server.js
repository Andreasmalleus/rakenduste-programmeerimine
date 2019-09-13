const express = require('express')
const app = express()
const path = require("path");
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "static", "index.html"));
})

app.use(express.static('static'));

app.listen(port, () => {
    console.log(`Our app is running on port ${ port }`);
});