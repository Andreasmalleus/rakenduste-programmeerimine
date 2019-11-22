const express = require('express')
const app = express()
const port = process.env.PORT || 3000;//heroku vajab process.env.porti
const itemRouter = require('./item.router.js');
const userRouter = require('./user.router.js');
const authRouter = require('./auth.router.js');
const bodyParser = require('body-parser');
const connection = require('./connection.js');

app.use(bodyParser.json());

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/",userRouter);
app.use("/api/v1/",itemRouter);

app.use("/static", express.static("dist/static"));//for images and css

app.use("/*", express.static("dist"));//for index.html

app.use(express.static('dist'));


connection.connectDb().then(async () =>{
    app.listen(port, () => {
        console.log(`Our app is running on port ${ port }`);
        console.log(`http://localhost:${ port }`);
    });
})
