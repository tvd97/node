const express = require('express');
const app = express();
const port = 5040;
app.get('/home',(req,res)=>{
  res.send("helloo" )
})
app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`)
})