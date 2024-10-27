import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Time from "../loader/Time";
import { Link } from "react-router-dom";

function SearchCard({ video }) {
  return (
    <div className="search-card">
      <Link to={`/video/${video?.videoId}`}>
        <div className="search-card-container">
          <div className="search-card-image-container">
            <img
              className="search-card-image"
              src={video?.thumbnails[0]?.url}
              alt="Video Thumbnail"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="search-card-content">
            <span className="search-card-title">
              {video?.title}
            </span>
            <span className="search-card-description">
              {video?.descriptionSnippet}
            </span>
            <div className="search-card-author-details">
              <div className="search-card-author-avatar">
                <img
                  className="search-card-avatar"
                  src={video?.author?.avatar[0]?.url}
                  alt="Author Avatar"
                />
              </div>
              <div className="search-card-author-info">
                <span className="search-card-author-name">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="search-card-verified-icon" />
                  )}
                </span>
                <div className="search-card-stats">
                  <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                  <span className="search-card-dot">.</span>
                  <span className="search-card-time">{video?.publishedTimeText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchCard;
