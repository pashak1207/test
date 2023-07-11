const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express()

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
    try {
        console.log(req.body)
        res.json({
            message: "success"
        })
    }catch (err){
        console.log(err)
        res.status(500).json({
            message: "error"
        })
    }
});

app.listen(PORT, (err) => {
    if (err){
        return console.log("Error: ", err)
    }
    return "Server OK"
})