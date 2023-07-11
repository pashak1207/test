const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    try {
        console.log("success")
        res.send("Hello")
    }catch (err){
        console.log(err)
    }
});

app.listen(PORT, (err) => {
    if (err){
        return console.log("Error: ", err)
    }

    return "Server OK"
})