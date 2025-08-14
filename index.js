const express = require("express");
const app = express();
const { userRouter } = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
