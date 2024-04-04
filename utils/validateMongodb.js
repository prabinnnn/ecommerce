const mongooes = require("mongoose");
const validateMongooseId = (Id) => {
  const isValid = mongooes.Schema.Types.ObjectId.isValid(Id);
  if (!isValid) throw new Error("this is not validate");
};
