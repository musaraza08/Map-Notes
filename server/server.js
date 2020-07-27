var express = require('express'); 
var mongoose = require('mongoose')
var cors = require('cors')
var app = express(); 

const bodyParser = require('body-parser')

const notesRoute = require('./routes/notes')

app.use(bodyParser.json())
app.use(cors())
app.use('/notes', notesRoute)

app.get('/', (req, res) => {
  res.send('Home')
});

mongoose.connect('mongodb://localhost:27017/MAP_NOTES', 
{useNewUrlParser: true},
 ()=>{
  console.log("Connected To Database")
});


app.listen(4000, function() { 
    console.log('\nserver running on port 4000\n'); 
})

