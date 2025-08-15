const Router = require("express");
const adminRouter = Router();
const {adminModel} = require("../db.js")

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "Admin signed up successfully",
  });
});

adminRouter.post("/signin", (req, res) => {
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
