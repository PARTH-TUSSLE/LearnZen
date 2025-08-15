const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then((res) => {
    console.log(`Connected to the DB`);
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);

const adminModel = mongoose.model("admin", adminSchema);

const courseModel = mongoose.model("course", courseSchema);

const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
