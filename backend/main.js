const express = require("express");
let data = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get("/", (req, res) => {
  res.send("helo ");
});

// app.get("/api/users", (req, res) => {
//   const age = Number(req.query.age);
//   const user = data.filter((user) => user.age == age);
//   if (!user) {
//     return res.status(400).send("User not found");
//   }
//   const html = user
//     .map((user) => {
//       return `<ul> <li>${user.first_name}</li></ul>`;
//     })
//     .join("");

//   if (Number.isNaN(age)) {
//     return res.status(400).send("Bad Request");
//   }

//   if (user.length === 0) {
//     return res.status(404).send("User not found ");
//   } else {
//     res.status(200).send(html);
//   }
// });
app.get("/api/users/", (req, res) => {
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
  res.json({ status: "pending" });
});
app.delete("/api/users/:id", (req, res) => {
  const id =  parseInt(req.params.id);
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
