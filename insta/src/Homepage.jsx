import React from "react";
import "../src/Homepage.css";
import Sidenav from "./assets/components/navigation/Sidenav";
import Suggestion from "./assets/components/timeline/suggestion/Suggestion";
import Timeline from "./assets/components/timeline/Timeline";
export default function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage_nav">
        <Sidenav />
      </div>

      <div className="homepage_timeline">
        <Timeline />
      </div>
    </div>
  );
}
