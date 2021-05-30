import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

const Feed = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {/* {console.log(posts)} */}
      {/* {console.log(posts[0].data)} */}
      {/* { data: { id, profilePic, message, timestamp, username, image } } */}
      {posts
        ? posts.map((post) => (
            <Post
              key={post.id}
              profilePic={post.data.profilePic}
              message={post.data.message}
              timestamp={post.data.timestamp}
              username={post.data.username}
              image={post.data.image}
            />
          ))
        : null}

      {/* <Post
        profilePic="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        message="FB clone in process"
        timestamp="This is a Time Stamp"
        username="Joh"
        image="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
      />
      <Post
        profilePic="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        message="FB clone is working"
        timestamp="This is a Time Stamp"
        username="Zeee"
        image="https://images.unsplash.com/photo-1617071504529-8a87244dae45?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
      /> */}
    </div>
  );
};

export default Feed;
