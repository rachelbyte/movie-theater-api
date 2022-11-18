const express = require('express')
const userRouter = require("./routes/Users");
const  { db } = require("./db");

const seed = require("./seed")

const app = express()

const port = 3000

app.use("/", userRouter);

app.use("/", seed)
app.use(express.json());

app.listen(port, async () => {
  console.log("server running")
    await db.sync();

  });