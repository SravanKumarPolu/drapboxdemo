import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import bgImg from "../assets/dropbox.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <div className="header-items-l">
        <Link className="site-logo" to="/dropbox">
          <span className="svg-container">
            <svg
              width="30"
              height="25"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.70076 0.320312L0.478516 4.91332L7.70076 9.50633L14.9242 4.91332L22.1465 9.50633L29.3687 4.91332L22.1465 0.320312L14.9242 4.91332L7.70076 0.320312Z"
                fill="#F7F5F2"
              ></path>
              <path
                d="M7.70076 18.6925L0.478516 14.0994L7.70076 9.50633L14.9242 14.0994L7.70076 18.6925Z"
                fill="#F7F5F2"
              ></path>
              <path
                d="M14.9242 14.0994L22.1465 9.50633L29.3687 14.0994L22.1465 18.6925L14.9242 14.0994Z"
                fill="#F7F5F2"
              ></path>
              <path
                d="M14.9242 24.8164L7.70077 20.2234L14.9242 15.6304L22.1465 20.2234L14.9242 24.8164Z"
                fill="#F7F5F2"
              ></path>
            </svg>
          </span>
        </Link>

        <Link className="site-name" to="/dropbox">
          <img src="/svgs/site-text.svg"></img>
        </Link>
        <nav id="menu">
          <label for="menu-toggle" id="menu-icon">
            &#9776;
          </label>
          <input type="checkbox" id="menu-toggle" />
          <Link className="why-dropbox" target="_balnk">
            Why Dropbox?
          </Link>
          <Link className="products" target="_balnk">
            Products
          </Link>
          <Link className="solutions" target="_balnk">
            Solutions
          </Link>
          <Link className="pricing" target="_balnk">
            Pricing
          </Link>

          <Link className="global" target="_balnk">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              class="dig-UIIcon dig-UIIcon--standard"
              width="24"
              height="24"
              role="presentation"
              focusable="false"
            >
              <path
                d="M11.75 4C6.535 4 4 6.535 4 11.75s2.535 7.75 7.75 7.75 7.75-2.535 7.75-7.75S16.965 4 11.75 4Zm5.714 4.5H14.87a9.237 9.237 0 0 0-.623-2.711A4.454 4.454 0 0 1 17.463 8.5ZM18 11.75c.002.586-.042 1.171-.133 1.75H14.97c.022-.579.03-1.167.03-1.75s-.008-1.171-.03-1.75h2.897c.09.579.135 1.164.133 1.75ZM11.75 18c-.616 0-1.3-.41-1.598-3h3.196c-.298 2.59-.982 3-1.598 3Zm-1.712-4.5c-.024-.524-.038-1.1-.038-1.75 0-.65.014-1.226.038-1.75h3.424c.024.524.038 1.1.038 1.75 0 .65-.014 1.226-.038 1.75h-3.424ZM5.5 11.75c-.002-.586.042-1.171.133-1.75H8.53c-.022.579-.03 1.167-.03 1.75s.008 1.171.03 1.75H5.633a11.074 11.074 0 0 1-.133-1.75Zm6.25-6.25c.616 0 1.3.41 1.598 3h-3.196c.298-2.59.982-3 1.598-3Zm-2.497.289A9.236 9.236 0 0 0 8.63 8.5H6.036a4.454 4.454 0 0 1 3.217-2.711ZM6.036 15H8.63c.07.93.28 1.844.623 2.711A4.453 4.453 0 0 1 6.037 15Zm8.21 2.711A9.237 9.237 0 0 0 14.87 15h2.594a4.454 4.454 0 0 1-3.217 2.711Z"
                fill="currentColor"
                vector-effect="non-scaling-stroke"
              ></path>
            </svg>
          </Link>
          <Link className="contact" target="_balnk">
            Contact
          </Link>
          <Link className="get-app" target="_balnk">
            Get app
          </Link>
        </nav>
        <Link className="sign-up" target="_balnk">
          Sign up
        </Link>
        <Link className="login" target="_balnk">
          Login
        </Link>

        <Link className="get-started" target="_blank">
          Get started{" "}
          <span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              class="dig-UIIcon dig-UIIcon--standard"
              width="24"
              height="24"
              role="presentation"
              focusable="false"
            >
              <path
                d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                vector-effect="non-scaling-stroke"
              ></path>
            </svg>
          </span>
        </Link>
      </div>
    </header>
  );
}
