const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://ratishjain6:testpass@cluster0.yx3egs2.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.get('/', async (req, res) => {
        const response = {message: "API works"};
        res.json(response);
    });
    const noteRouter = require('./routes/Noteroutes');
    app.use("/notes",noteRouter)
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
});