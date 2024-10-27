import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Video from "./video";
import { mockChannelData } from "./utils/mockChannelData";
function ChannelPage() {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // Simulate fetching data by setting mock data
    setChannel(mockChannelData);
    setVideos(mockChannelData.videos);
  }, []);

  const handleEditVideo = (videoId) => {
    // Logic for editing video
  };

  const handleDeleteVideo = (videoId) => {
    // Logic for deleting video
    setVideos((prev) => prev.filter((video) => video.videoId !== videoId));
  };

  return (
    <div className="channel-page">
      {channel && (
        <>
          <div className="channel-info">
            <img src={channel.channelBanner} alt="Channel Banner" className="channel-banner" />
            <h1>{channel.channelName}</h1>
            <p>{channel.description}</p>
            <span>{channel.subscribers} subscribers</span>
          </div>

          <div className="video-list">
            {videos.map((video) => (
              <div key={video.videoId} className="video-item">
                <Video video={video} />
                {user?.id === channel.owner && (
                  <div className="video-actions">
                    <button onClick={() => handleEditVideo(video.videoId)}>Edit</button>
                    <button onClick={() => handleDeleteVideo(video.videoId)}>Delete</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ChannelPage;
