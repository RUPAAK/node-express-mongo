const { table } = require("console");
const express = require("express");
const path = require("path");
const getHome = require("./controllers/home");
const dbConnect = require("./db");
const userRouter = require("./routes/user/index");

const app = express();
require("dotenv").config();

app.use(express.json())
app.set("view engine", "ejs");

const staticPath = path.join(__dirname, "../public");

const partialPath = path.join(__dirname, "../views");
app.use(express.static(staticPath));

app.set("views", partialPath);

dbConnect();




app.get("/", (req, res) => {
  res.send({
    data: "Server is running",
  });
});

app.use("/users", userRouter);



// app.get("/about", (req, res) => {
//   // const data = { name: "rakesh", age: 5 };

//   const dataArr = [
//     {
//       name: "Learn Node",
//       author: "Rakesh",
//     },
//     {
//       name: "Learn Serverless",
//       author: "Rupak",
//     },
//     {
//       name: "Learn React",
//       author: "Mark",
//     },
//   ];

//   res.render("about.ejs", { name: "Bimal", data: dataArr });
// });

// app.get("/getprofile", (req, res) => {
//   res.send({
//     name: "Rakesh",
//   });
// });





const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server On : ${PORT}`));
