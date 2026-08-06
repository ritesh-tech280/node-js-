const express = require("express");
const data = require("./MOCK_DATA.json");

const app = express();
const PORT = 3000;
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`Hello this is home page Mr. ${req.query.name}`)
})
 
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((user) => user.id == id);
  if (Number.isNaN(id)) {
    return res.status(400).send("Bad Request");
  } else if (!user) {
    return res.status(404).send("User not found");
  } else {
    res.status(200).send(user);
  }
});

 
app.get("/users", (req, res) => {
  const age = Number(req.query.age);
  const user = data.filter((user) => user.age == age);
  if (!user) {
    return res.status(400).send("User not found");
  }
  const html = user.map((user) => {
      return `<ul> <li>${user.first_name}</li></ul>`;
    }).join("");
   
   if(Number.isNaN(age)) {
    return res.status(400).send("Bad Request");
  } 

  if(user.length === 0) {
    return res.status(404).send("User not found ");
  } else {
    res.status(200).send(html);
  }
});


app.listen(PORT, () => {
  console.log(`server running on Port : ${PORT}`);
});

 
