import express from 'express';
import { getAllVideos, getVideoById, updateVideo, deleteVideo } from '../Controller/videocontroller.js';

const router = express.Router();

router.get('/', getAllVideos);
router.get('/:id', getVideoById);
router.put('/:id', updateVideo);
router.delete('/:id', deleteVideo);

export default router;
