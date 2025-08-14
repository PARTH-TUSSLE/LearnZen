const { Router } = require('express');

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
   res.send({
     message: "Signed up successfully",
   });
});

userRouter.post("/signin", (req, res) => {
   res.send({
     message: "Signed in successfully",
   });
});

userRouter.get("/purchases", (req, res) => {
   res.send({
     message: "Your Courses",
   });
});

module.exports = {
  userRouter: userRouter
}