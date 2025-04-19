import React, { useState } from "react";
import "./Timeline.css";
import Suggestion from "./suggestion/Suggestion";
import Post from "./posts/Post";
export default function Timeline() {
  // const [posts,setposts]=useState({})
  //  stopped at 1:03:00
  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="posts">
          <Post />
          <Post />
        </div>
      </div>
      <div className="timeline_right">
        <Suggestion />
      </div>
    </div>
  );
}
