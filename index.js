const express = require("express");
const app = express();

const { mongoose } = require("mongoose");
const { userRouter } = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

async function main () {
  await mongoose.connect(MONGO_URL);
}

app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

main().then((
  app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
  console.log(`Connected to DB`)
})
))
.catch((err) => {
  console.log(err)
})

