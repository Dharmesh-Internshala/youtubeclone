import express from 'express';
import { addComment, getCommentsByVideoId } from '../Controller/commentcontroller.js';
import { isAuthenticatedUser } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to add a comment to a video (requires authentication)
router.post('/', isAuthenticatedUser, addComment);

// Route to fetch comments for a specific video by ID
router.get('/:videoId', getCommentsByVideoId);

export default router;
