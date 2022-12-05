// app.get('/api/v1/tasks')- getall the tasks
// app.post('/api/v1/tasks')-create a new task
// app.get('/api/v1/tasks/:id')-get single task
//app.patch('/api/v1/tasks/:id')-update task
//app.delete('/api/v1/tasks/:id')-delete task
//CRUD: create, read, update, destroy: the user is able to do this

const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config() //keeps mongo pw safe!!
// console.log(process.env.MONGO_URI)
// console.log(process.env.TEST_VALUE)

//middleware
app.use(express.json())

//routes
app.get('/hello', (req,res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listenining on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();

