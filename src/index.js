require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')
const operationsRoute = require('./routes/operations')
const cors = require('cors')

app.use(cors({origin: 'http://127.0.0.1:5173'}))
const PORT = process.env.PORT || 80
app.use(bodyParser.json())

app.get('/', (_req, res) => {
    res.send('Welcome to my API')
})
app.use('/login', loginRoute)
app.use('/register', registerRoute)
app.use('/operations', operationsRoute)
app.listen(PORT, ()=>{
    console.log('Connected!')
})