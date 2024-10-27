import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  url: { type: String, required: true },
  views: { type: Number, default: 0 },
  publishedAt: { type: Date, default: Date.now },
  // Additional fields like stats, thumbnails, etc.
}, { timestamps: true });

export default mongoose.model('Video', videoSchema);
