import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function SuggestedVideo({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="suggested-video">
          <div className="thumbnail-container">
            <img
              className="thumbnail"
              src={video?.thumbnails[0]?.url}
              alt="video thumbnail"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="suggestvideo-info">
            <span className="video-title">
              {video?.title}
            </span>
            <span className="suggestchannel-info">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="verified-icon" />
              )}
            </span>
            <div className="video-stats">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="dot-separator">.</span>
              <span className="published-time">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SuggestedVideo;
