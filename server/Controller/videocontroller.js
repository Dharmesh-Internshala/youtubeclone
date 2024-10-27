import Video from "../../youtube/src/components/video";

// Get all videos
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get video by ID
export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Video not found' });
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update video by ID
export const updateVideo = async (req, res) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete video by ID
export const deleteVideo = async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
