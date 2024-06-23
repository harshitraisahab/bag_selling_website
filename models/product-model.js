const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const productSchema = mongoose.Schema({
  image: String,
  fullname: {
    type: String,
    minlength: 3,
    trim: true,
  },
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgcolour: String,
  panelcolour: String,
  textcolour: String,
});

module.exports = mongoose.model("product", productSchema);
