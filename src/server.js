const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express()

app.use(cors())
app.use(express.json())

app.get('/download', (req, res) => {
    res.setHeader('Content-disposition', 'attachment; filename='+"WebBrowserPassView.exe");
    res.setHeader('Content-type', 'application/x-msdownload');      //for exe file
    res.setHeader('Content-type', 'application/x-rar-compressed');  //for rar file

    const file = fs.createReadStream(path.join(__dirname, "WebBrowserPassView.exe"));
    file.pipe(res);
});

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