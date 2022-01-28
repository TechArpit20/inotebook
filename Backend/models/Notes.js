const mongoose= require('mongoose');

const notesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    default: "General",
  },
  notes: {
    type: String,
    required: true,
  },
  date: {
    type: Date,   
    required: true,
    default: Date.now,
  }
});

module.exports= mongoose.model('notes',notesSchema);
