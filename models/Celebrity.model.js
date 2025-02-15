const { Schema, model } = require("mongoose");

const celebritySchema = new Schema({
  name: String,
  occupation: {
    type: String,
    enum: ["actor", "singer", "comedian", "unknown"],
  },
  catchphrase: {
    type: String,
    required: true,
  },
});

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;
