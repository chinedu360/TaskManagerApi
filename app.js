const express = require('express')
const app = express();
const tasks = require('./routes/task')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error')

const MONGO_URI = process.env.MONGO_URI

const connectDB = require('./db/connect')

//middleware
app.use(express.static('./public'))
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (err) {
        console.log(err)
    }
}

start();