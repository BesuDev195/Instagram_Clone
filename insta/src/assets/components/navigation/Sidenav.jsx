import React from "react";
import "../navigation/Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";

export default function Sidenav() {
  return (
    <div className="sidenav">
      <div className="sidenav_logo">
        <img src="src\assets\insta logoo.png"></img>
      </div>

      <div className="side_buttons">
        <button className="sidenav_button">
          <HomeIcon />
          <span>Home</span>
        </button>
        {/* ////////////////////////////////// */}
        <button className="sidenav_button">
          <SearchIcon />
          <span>Search</span>
          </button>
          
          {/* ////////////////////////////////// */}

          <button className="sidenav_button">
            <ExploreIcon />
            <span>Explore</span>
          </button>
          {/* ////////////////////////////////// */}

          <button className="sidenav_button">
            <SlideshowIcon />
            <span>Reel</span>
          </button>

          {/* ////////////////////////////////// */}
          <button className="sidenav_button">
            <ChatIcon />
            <span>Messages</span>
          </button>
          {/* ////////////////////////////////// */}

          <button className="sidenav_button">
            <FavoriteBorderIcon />
            <span>Favorite</span>
          </button>
          {/* ////////////////////////////////// */}

          <button className="sidenav_button">
            <AddCircleIcon />
            <span>Create</span>
          </button>
          {/* ////////////////////////////////// */}

      
       
      </div>
         <div className="sidenav__more">
          <button className="sidenav_button">
            <MenuIcon/>
            <span>More</span>
          </button>
         </div>
    </div>
  );
}
