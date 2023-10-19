const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  job_name: {
    az: {
      type: String,
      require: true,
    },
    en: {
      type: String,
      require: true,
    },
  },
  job_description: {
    az: {
      type: String,
      require: true,
    },
    en: {
      type: String,
      require: true,
    },
  },
  status: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
});

module.exports = new mongoose.model("Career", careerSchema);
