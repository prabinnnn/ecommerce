require("dotenv").config();
const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/auth");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("./middleware/errorHander");
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const PORT = Number(process.env.PORT);
app.use("/api/v1/user", authRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`app is runing at ${PORT}`);
});
