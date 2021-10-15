import React from "react";
import "./Home.css";
import { GoHome } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineHashtag } from "react-icons/hi";
import { VscBell, VscNote } from "react-icons/vsc";
import { BsEnvelope, BsBookmark } from "react-icons/bs";
import {
  IoPersonOutline,
  IoEllipsisHorizontalCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__left">
          <div className="home__leftLogo">
            <Link exact to="/">
              <FaTwitter className="home__twitterIcon" />
            </Link>
          </div>
          <div className="home__leftLinks">
            <Link className="home__leftLink" exact to="/">
              <GoHome className="home__leftLinkIcon" />
              <p className="home__leftLinkText">Home</p>
            </Link>
            <Link className="home__leftLink" exact to="/">
              <HiOutlineHashtag className="home__leftLinkIcon" />
              <p className="home__leftLinkText">Explore</p>
            </Link>
            <Link className="home__leftLink" exact to="/">
              <VscBell className="home__leftLinkIcon" />
              <p className="home__leftLinkText">Notifications</p>
            </Link>
            <Link className="home__leftLink" exact to="/">
              <BsEnvelope className="home__leftLinkIcon" />
              <p className="home__leftLinkText">Messages</p>
            </Link>
            <Link className="home__leftLink" exact to="/">
              <BsBookmark className="home__leftLinkIcon" />
              <p className="home__leftLinkText">Bookmarks</p>
            </Link>
            <Link className="home__leftLink" exact to="/">
              <VscNote className="home__leftLinkIcon" />
              <p className="home__leftLinkText">Lists</p>
            </Link>
            <Link className="home__leftLink" exact to="/">
              <IoPersonOutline className="home__leftLinkIcon" />
              <p className="home__leftLinkText">Profile</p>
            </Link>
            <Link className="home__leftLink" exact to="/">
              <IoEllipsisHorizontalCircleOutline className="home__leftLinkIcon" />
              <p className="home__leftLinkText">More</p>
            </Link>
          </div>
          <button className="home__leftTweetBtn">Tweet</button>
        </div>
        <div className="home__middle"></div>
        <div className="home__right"></div>
      </div>
    </div>
  );
}
