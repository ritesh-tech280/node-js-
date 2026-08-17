const express = require("express");
const urlRoute = require("./router/url");
const URl = require("./models/url");
const staticRoute = require('./router/staticRoute')
const path = require("path");
const { connectDB } = require("./connection");

const app = express();
const PORT = 3000;

//mongoDb connection
connectDB("mongodb://localhost:27017/urlShort").then(() =>
  console.log("MongoDB Connected"),
);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false}))
app.use("/url", urlRoute);
app.use('/' , staticRoute)

app.set("view engine", "ejs");
app.set("views", "./views");

// visit the url
app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URl.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Example server running on localhost : ${PORT}`);
});
