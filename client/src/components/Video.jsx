import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
  console.log(video);

  return (
    <div className="video-container">
      <Link to={`/video/${video?.videoId}`}>
        <div className="video-content">
          {/* Thumbnail & duration */}
          <div className="video-thumbnail">
            <img
              className="thumbnail-image"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* Channel logo & title */}
          <div className="video-info">
            <div className="channel-logo">
              <img
                className="channel-avatar"
                src={video?.author?.avatar[0].url}
                alt=""
              />
            </div>
            <div className="video-details">
              <span className="video-title">{video?.title}</span>
              <span className="channel-info">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="verified-icon" />
                )}
              </span>
              <div className="video-stats">
                <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                <span className="dot-separator">·</span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
