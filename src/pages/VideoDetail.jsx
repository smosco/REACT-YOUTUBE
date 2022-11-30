import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos/RelatedVideos";
import styles from "./VideoDetail.module.css";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  // console.log(video);
  const { title, description, channelTitle, channelId } = video.snippet;
  return (
    <section className={styles.container}>
      <article>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameborder="0"
        />
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className={styles.pre}>{description}</pre>
        </div>
      </article>
      <section className={styles.side}>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
