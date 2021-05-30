import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imgUrl,
    });

    setImgUrl("");
    setInput("");
  };
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messagesender_input"
            placeholder="What's on yor Mind?"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Btn
          </button>
        </form>
      </div>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
