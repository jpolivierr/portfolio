const express = require("express")
const path = require('path')
const app = express()
const cors = require('cors')
const PORT = 5000

//* MIDDLEWARE **//
app.use(cors())
app.use(express.json({extended: false}))


app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res)=>{
    res.send('hello from server')
}) 

app.use('/', require('./routes/emailRoute'))
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
