const mongoose= require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: "General",
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,   
    required: true,
    default: Date.now,
  }
});

module.exports= mongoose.model('user',userSchema);
