const express = require("express");
const app = express();
const { mongoDbConnection } = require("./connection");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middleware");

const port = 3000;

mongoDbConnection("mongodb://localhost:27017/myfirstDb").then(() =>
  console.log("MongoDB Connected"),
);

app.use(express.urlencoded({ extended: false }));
app.use("/api/users", userRouter);
app.use(logReqRes("log.txt"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
