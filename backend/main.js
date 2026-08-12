const express = require("express");
let data = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Using Middleware
app.use((req, res, next) => {
  console.log("Helllo from middle ware 1");
  fs.writeFile(
    "log.txt",
    `This ${req.method} request come from middleware 1 from ${req.path} `,
    (err, data) => {
      next();
    },
  );
});
// writting middleware 
const myBlogger = function (req, res, next) {
  console.log("BLOGGED");
  next();
};

app.use(myBlogger);

app.get("/", (req, res) => {
  res.send("helo ");
});

app.get("/api/users/", (req, res) => {
  //Best Practice Always add X at front of custom HEeader
  res.setHeader("X-myName", "Ritesh Kumar");
  console.log("This is custome Headers",req.headers)
  res.json(data);
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).send("Bad Request");
  }
  const user = data.find((user) => user.id == id);
  if (!user) {
    return res.status(404).send("User not found");
  } else {
    res.status(200).json(user);
  }
});
app.patch("/api/users/:id", (req, res) => {
  // update the user

  const id = Number(req.params.id);
  const useIndex = data.findIndex((user) => user.id == id);
  if (Number.isNaN(id)) {
    return res.status(400).send("Bad Request");
  }
  if (useIndex == -1) {
    return res.status(404).send("User not Found");
  }
  data[useIndex] = { ...data[useIndex], ...req.body };

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err, data) => {
    res.json({ status: "success" });
  });
});
app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const users = data.filter((user) => user.id !== id);

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    res.json({ status: "Success", id });
  });
});

app.post("/api/users/", (req, res) => {
  const body = req.body;
  data.push({ ...body, id: data.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err, data) => {
    res.json({ status: "Success" });
  });
});

app.listen(PORT, () => {
  console.log(`server running on Port : ${PORT}`);
});
