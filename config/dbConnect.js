const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    conn = mongoose.connect(process.env.DB);
    console.log("database is connected");
  } catch (e) {
    console.log("err in database");
  }
};
module.exports = dbConnect;
