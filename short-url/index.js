const express = require("express");
const URl = require("./models/url");
const path = require("path");
const { connectDB } = require("./connection");
const cookieParser = require('cookie-parser')
const { checkAuthorizeUser , restrictTo } = require('./middleware/auth')
 

const userRoute = require("./router/user")
const staticRoute = require('./router/staticRoute')
const urlRoute = require("./router/url");

const app = express();
const PORT = 3000;

//mongoDb connection
connectDB("mongodb://localhost:27017/urlShort").then(() =>
  console.log("MongoDB Connected"),
);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false}))
app.use(cookieParser())
app.use(checkAuthorizeUser)

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url",restrictTo(['NORMAL' , 'ADMIN']) ,  urlRoute);
app.use('/user', userRoute)
app.use('/', staticRoute)
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
