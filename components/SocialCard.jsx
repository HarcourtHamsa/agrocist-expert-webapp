import React from "react";
import styles from "../styles/sass/socialCard.module.scss";
import Image from "next/image";

import like from "../assets/images/like.svg";
import message from "../assets/images/message.png";

function SocialCard({ image, username, location, msg, likes, comments }) {
  return (
    <div className={styles.card}>
      <Image src={image} className="image" alt="" />
      <div className="flex">
        <p>{username}</p>
        <small>{location}</small>
      </div>
      <p>{msg}</p>

      <div className={["flex"]}>
        <div className="flex">
          <Image src={like} alt="" />
          <p>Likes</p>
          <small>{likes}</small>
        </div>

        <div className="flex" id="icons">
          <Image src={message} alt="" />
          <p>Comments</p>
          <small>{comments}</small>
        </div>
      </div>
    </div>
  );
}

export default SocialCard;
