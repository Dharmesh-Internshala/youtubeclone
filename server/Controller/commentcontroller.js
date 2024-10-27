import Comment from "../Models/commentmodels";
// Add a new comment
export const addComment = async (req, res) => {
  const { videoId, content } = req.body;
  const userId = req.user.id; // Assuming user ID is available from auth middleware

  try {
    const newComment = await Comment.create({ videoId, userId, content });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add comment', error: error.message });
  }
};

// Fetch comments for a video
export const getCommentsByVideoId = async (req, res) => {
  const { videoId } = req.params;

  try {
    const comments = await Comment.find({ videoId }).populate('userId', 'username'); // Populate to get user info
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch comments', error: error.message });
  }
};
