import React from "react";
import "./swipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

export default function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButton__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__star">
        <StarIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__thunder">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
