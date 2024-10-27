import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestedVideo from "./SuggestedVideo";
import { BsFillCheckCircleFill } from "react-icons/bs";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
    fetchComments(); // Fetch comments when the component mounts
  }, [id]);

  const fetchVideoDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5500/api/videos/${id}`);
      const data = await response.json();
      setVideo(data);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  const fetchRelatedVideos = async () => {
    try {
      const response = await fetch(`http://localhost:5500/api/videos/${id}/related`);
      const data = await response.json();
      setRelatedVideos(data);
    } catch (error) {
      console.error("Error fetching related videos:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/videos/${id}/comments`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentSubmit = async () => {
    if (editIndex !== null) {
      // Editing existing comment
      const updatedComment = { text: newComment }; // Adjust based on your API
      try {
        await fetch(`http://localhost:5500/api/comments/${comments[editIndex].id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedComment),
        });
        const updatedComments = comments.map((comment, index) =>
          index === editIndex ? updatedComment : comment
        );
        setComments(updatedComments);
      } catch (error) {
        console.error("Error updating comment:", error);
      }
      setEditIndex(null); // Clear edit mode
    } else {
      // Adding new comment
      const newCommentData = { text: newComment, videoId: id }; // Adjust based on your API
      try {
        const response = await fetch(`http://localhost:5500/api/videos/${id}/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCommentData),
        });
        const addedComment = await response.json();
        setComments([...comments, addedComment]); // Add new comment to state
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
    setNewComment(""); // Clear input field
  };

  const handleDeleteComment = async (index) => {
    const commentId = comments[index].id; // Assuming each comment has a unique id
    try {
      await fetch(`http://localhost:5500/api/comments/${commentId}`, {
        method: "DELETE",
      });
      const updatedComments = comments.filter((_, i) => i !== index);
      setComments(updatedComments);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleEditComment = (index) => {
    setNewComment(comments[index].text); // Assuming comment has a text property
    setEditIndex(index);
  };

  return (
    <div className="playingvideo-container">
      <div className="playingvideo-wrapper">
        {/* Video Section */}
        <div className="main-video-section">
          <div className="player-container">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="playingvideo-title">{video?.title}</div>
          <div className="playingvideo-details">
            {/* Channel Information */}
            <div className="playingchannel-info">
              <div className="playingchannel-logo">
                <img
                  className="playingchannel-image"
                  src={video?.author?.avatar?.url}
                  alt="channel logo"
                />
              </div>
              <div className="playingchannel-details">
                <div className="playingchannel-name">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="verified-icon" />
                  )}
                </div>
                <div className="subscribers-count">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
              <button className="subscribe-button">Subscribe</button>
            </div>
            {/* Like and View Counts */}
            <div className="playingvideo-stats">
              <div className="like-count">
                <AiOutlineLike className="like-icon" />
                {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
              </div>
              <div className="view-count">
                {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
              </div>
            </div>
          </div>
          {/* Video Description */}
          <div className="playingvideo-description">
            {video?.description}
          </div>
          {/* Comments Section */}
          <div className="comments-section">
            <h3>Comments</h3>
            <div className="comments-input">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={handleCommentSubmit}>
                {editIndex !== null ? "Update" : "Add"} Comment
              </button>
            </div>
            <div className="comments-list">
              {comments.map((comment, index) => (
                <div key={index} className="comment-item">
                  <p>{comment.text}</p> {/* Assuming comment has a text property */}
                  <button onClick={() => handleEditComment(index)}>Edit</button>
                  <button onClick={() => handleDeleteComment(index)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Related Videos Section */}
        <div className="related-videos-section">
          {relatedVideos.map((item, index) => (
            <SuggestedVideo key={index} video={item?.video} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
