const express = require("express");
const Article = require("./models/article");
const app = express();
const mongoose = require("mongoose");

const articleRoute = require("./routes/articles");
mongoose.connect("mongodb://localhost/news",{useNewUrlParser:true});
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/",async (req, res) => {
  const articles =await Article.find().sort({createdAt:'desc'});
    
    res.render('articles/index', { articles: articles });
});
app.use("/articles", articleRoute);
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
