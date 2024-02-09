require("dotenv").config();
const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/auth");
const bodyParser = require("body-parser");
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = Number(process.env.PORT);
app.use("/api/v1/user", authRouter);
app.listen(PORT, () => {
  console.log(`app is runing at ${PORT}`);
});
