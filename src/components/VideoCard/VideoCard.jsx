import React from "react";
import { formatAgo } from "../../util/date";
import styles from "./VideoCard.module.css";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video: video } });
      }}
    >
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.channel}>{channelTitle}</p>
        <p className={styles.time}>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
