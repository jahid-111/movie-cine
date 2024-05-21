/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";

import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import Sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import CartDetails from "./CartDetails";
import { MovieContext, ThemeContext } from "../context/context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cardData, setCardData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleCartShow() {
    setShowCart(true);
  }

  return (
    <div>
      <header>
        {showCart && (
          <CartDetails onClose={() => setShowCart(false)}></CartDetails>
        )}

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
                onClick={() => setDarkMode((darkMode) => !darkMode)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={darkMode ? Sun : moon}
                  width="24"
                  height="24"
                  alt="Moon"
                />
              </a>
            </li>
            <li>
              <a
                onClick={handleCartShow}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={ShoppingCart}
                  width="24"
                  height="24"
                  alt="Shopping-Cart"
                />
                {cardData.length > 0 && <span>{cardData.length}</span>}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
