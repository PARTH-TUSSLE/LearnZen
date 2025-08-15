const Router = require("express");
const adminRouter = Router();
const {adminModel} = require("../db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "adminhikehdeee!"


adminRouter.post("/signup",async (req, res) => {
  
  const { email, password, firstName, lastName } = req.body;
  
    const hashedPass = await bcrypt.hash(password, 5);
    try {
      await adminModel.create({
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
 

  res.json({
    msg: "Request successfull"
  })

  
});

adminRouter.post("/signin", async (req, res) => {

   const { email, password } = req.body;
  try {
    const user = await adminModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ msg: "Incorrect credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, JWT_ADMIN_PASSWORD);
      return res.json({ token: token });
    } else {
      return res.status(404).json({ msg: "Incorrect credentials" });
    }
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }

  res.json({
    message: "Admin signed in successfully",
  });
});

adminRouter.post("/course", (req, res) => {
  res.json({
    message: "Add a new course",
  });
});

adminRouter.put("/course", (req, res) => {
  res.json({
    message: "Update the course details",
  });
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "All the courses created by you",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
