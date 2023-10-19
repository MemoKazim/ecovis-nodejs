const mongoose = require("mongoose");

const aboutShcema = new mongoose.Schema({
  header: {
    az: {
      type: String,
      require: true,
    },
    en: {
      type: String,
      require: true,
    },
  },
  content: {
    az: {
      type: String,
      require: true,
    },
    en: {
      type: String,
      require: true,
    },
  },
  image: {
    data: String,
    contentType: String,
  },
});

module.exports = new mongoose.model("About", aboutShcema);
