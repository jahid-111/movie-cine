/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Trending from "../assets/icons/trending.svg";
import NewRelese from "../assets/icons/newRelease.svg";
import CommingSoon from "../assets/icons/commingSoon.svg";
import Favorite from "../assets/icons/favourite.svg";
import WatchLater from "../assets/icons/watchLater.svg";
const Sidebar = () => {
  return (
    <div>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <img src={Trending} width="24" height="24" alt="Trending" />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={NewRelese} width="24" height="24" alt="NewRelese" />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={CommingSoon} width="24" height="24" alt="CommingSoon" />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={Favorite} width="24" height="24" alt="Favorite" />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={WatchLater} width="24" height="24" alt="WatchLater" />
              <span>WatchLater</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
