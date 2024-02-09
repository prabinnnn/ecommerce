require("dotenv").config();
const express = require("express");
const app = express();
app.listen(PORT, () => {
  console.log(`app is runing at ${PORT}`);
});
