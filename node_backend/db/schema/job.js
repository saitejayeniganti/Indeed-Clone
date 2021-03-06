const mongoose = require("mongoose");

const { Schema } = mongoose;

const jobScehma = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    // get company name, location, reviews other details from company schema
    jobTitle: { type: String, required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
    role: { type: String },
    location: {
      city: { type: String },
      state: { type: String },
      zip: { type: String },
    },
    industry: { type: String },
    street: { type: String },
    country: { type: String },
    salary: { type: Number },
    type: { type: String },
    work: { type: String },
    why: { type: String },
    need: { type: String },
    what: { type: String },
  },
  { _id: false },
  { collection: "job" }
);

const createModel = function () {
  return mongoose.model("job", jobScehma);
};

module.exports.createModel = createModel;
