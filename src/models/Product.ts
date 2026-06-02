import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  badge: { type: String },
  image: { type: String },
  isPopular: { type: Boolean, default: false },
  isTrending: { type: Boolean, default: false },
}, { timestamps: true });

// Check if the model exists before compiling to prevent overwrite errors in development
export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
