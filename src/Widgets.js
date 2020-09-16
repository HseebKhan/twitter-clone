import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1303617349749215232"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="DeBruyneKev"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/DeBruyneOfficial"}
          options={{ text: "#football is awesome", via: "DeBryuneKev" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
