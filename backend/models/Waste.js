const mongoose = require('mongoose'); ///Importing Mongoose     Schema validation

const wasteSchema = new mongoose.Schema({  /// Defining the Schema
  name: { type: String, required: true },
  type: { type: String, required: true },  /// required validation
  quantity: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },
  description: { type: String, default: '' },
  farmerId: { type: String, required: true }, 
  image: { type: String, default: '' }, 
  createdAt: { type: Date, default: Date.now },
});

const Waste = mongoose.model('Waste', wasteSchema);

module.exports = Waste;