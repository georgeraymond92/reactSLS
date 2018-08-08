const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  serv: { type: String, required: true },
  phone: { type: Number,  min: 10, max: 10, required: true },
  email: { type: String, required: true },
  location: { type: Number, min: 5, max: 5, required: true },
}, { _id: false });

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;



// title: { type: String, required: true },
// url: { type: String, required: true },
// date: { type: Date, default: Date.now }

// const articleSchema = new Schema({
//   _id: { type: Schema.Types.ObjectId, required: true },
//   name: { type: String, required: true },
//   serv: { type: String, required: true },
//   phone: { type: Number,  min: 10, max: 10, required: true },
//   email: { type: String, required: true },
//   location: { type: Number, min: 5, max: 5, required: true },
// }, { _id: false });