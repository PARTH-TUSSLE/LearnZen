const Router = require("express");
const courseRouter = Router();
const {courseModel} = require("../db.js");


courseRouter.post("/purchase", (req, res) => {
  res.send({
    "message": "Course purchased successfully",
  })
});

courseRouter.get("/preview", (req, res) => {
   res.send({
     message: "All courses",
   });
});

module.exports = {
  courseRouter: courseRouter
}