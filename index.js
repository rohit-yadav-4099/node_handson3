const express = require("express");
const { data1, data2, data3, data4, data5 } = require("./data");

const app = express();

app.use((req, res, next) => {
  console.log("This is Global Middleware..");
  next();
});

const particularMiddleware = (req, res, next) => {
  console.log("Special Authentication / Middleware");
  next();
};

app.get("/", (req, res) => {
  res.send(
    "Use /data1, /data2, /data3, /data4, /data5 to navigate and check middlewares in the terminal..."
  );
});

app.get("/data1", (req, res) => {
  res.send(data1);
});

app.get("/data2", particularMiddleware, (req, res, next) => {
  res.send(data2);
  next();
});

app.get("/data3", (req, res) => {
  res.send(data3);
});

app.get("/data4", particularMiddleware, (req, res, next) => {
  res.send(data4);
  next();
});

app.get("/data5", (req, res)=>{
    res.send(data5)
})


app.listen(4040, ()=>{
    console.log("Server Starting...")
})