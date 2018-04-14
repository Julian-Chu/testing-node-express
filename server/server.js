const express = require('express');
const app = express();

app.get("/", (req, res)=>{
  res.status(200).send("Hello World");
});

app.get("/users", (req,res)=>{
  let users = [{ 
    name:'Tom',
    gender: 'male'
  }, {
    name: 'Jack',
    gender: 'male'
  },{
    name: 'John',
    gender: 'male'
}]
  res.status(200).send(users);
})

app.get("/err", (req, res)=>{
  res.status(404).send({
    error: "Page not found.",
    name: 'Test app'
  })
})

app.listen(5000);

module.exports = {
  app
}