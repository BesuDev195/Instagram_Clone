import React from "react";
import "../posts/Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

export default function Post() {
  return (
    <div className="Post">
      <div className="post_header">
        <div className="postheader_Author">
          <Avatar>R</Avatar>
          mr_besu . <span>12h</span>
        </div>

        <MoreHorizIcon/>

      </div>

      <div className="post_image">
        <img src="https://media.istockphoto.com/id/1171319990/photo/beautiful-girl-taking-photos-with-retro-camera.jpg?s=612x612&w=0&k=20&c=vgt1M5BsYn5SEhBORdRASif1Yeq5yM6-0x55YRU4qrQ=" alt="" />
      </div>
      <div className="post_footer">
        <div className="post_Footericons">
            <div className="mainIcons">
                <FavoriteBorderIcon className="postIcon"/>
                <ChatBubbleOutlineIcon className="postIcon"/>
                <TelegramIcon className="postIcon"/>


            </div>
            <div className="saveIcon">
                <TurnedInNotIcon className="" />
            </div>
        </div>
        Liked by 500 peoples
      </div>
    </div>
  );
}
