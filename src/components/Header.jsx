/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import ShoppingCart from "../assets/shopping-cart.svg";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="Logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="Ring" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={moon} width="24" height="24" alt="Moon" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={ShoppingCart}
                  width="24"
                  height="24"
                  alt="Shopping-Cart"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
