import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  videoId: { type: String, required: true }, // Associate with a specific video by its ID
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Comment', commentSchema);
