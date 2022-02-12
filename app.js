const express = require('express')
const app = express();
const task = require('./routes/task')
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI

const connectDB = require('./db/connect')
//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/task', task)

const port = 3000;

const start = async () => {
    try {
        await connectDB(MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (err) {
        console.log(err)
    }
}

start();