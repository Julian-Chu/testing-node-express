const express = require('express');
const app = express();

app.get("/", (req, res)=>{
  res.status(200).send("Hello World");
});

app.get("/err", (req, res)=>{
  res.status(404).send({
    error: "Page not found."
  })
})

app.listen(5000);

module.exports = {
  app
}