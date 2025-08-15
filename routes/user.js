const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "abcdefgh12345";

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const hashedPass = await bcrypt.hash(password, 5);
  try {
    await userModel.create({
      email: email,
      password: hashedPass,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (err) {
    res.send({
      msg: "Signup failed",
    });
  }

  res.send({
    message: "Signed up successfully",
  });
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ msg: "Incorrect credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD);
      return res.json({ token: token });
    } else {
      return res.status(404).json({ msg: "Incorrect credentials" });
    }
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }
});

userRouter.get("/purchases", (req, res) => {
  res.send({
    message: "Your Courses",
  });
});

module.exports = {
  userRouter: userRouter,
};
