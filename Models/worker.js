const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workersSchema = Schema({
  firstName: {
    type: String,
    required: true,
    uppercase: true
  },
  lastName: {
    type: String,
    required: true,
    uppercase: true
  },
  department: {
    type: String,
    required: true,
    enum: ["Minister", "Choir", "Pastor", "Usher", "prayerTeam"]
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /^[0-9]{11}$/.test(v);
      },
      message: props => `${props.value} enter valid number!`
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

workersSchema.index({ "$**": "text" });

const Worker = mongoose.model("Worker", workersSchema);

module.exports = Worker;
