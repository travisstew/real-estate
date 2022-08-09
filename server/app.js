const express = require('express');
require('dotenv').config();
const app = express();
const listings = require('./routes/listings');

//middleware
app.use(express.json());


app.use((req,res,next)=>{
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/',listings)

app.listen(4000, ()=>{

  console.log('listening on port 4000');

});