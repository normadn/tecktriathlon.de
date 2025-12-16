import React from "react";
import { getImageUrl } from "../utils/imageHelper";

import cubeswebp from "../assets/img/icons/mobileMenuCubes.webp";
import menuClose from "../assets/img/icons/mobileMenuClose.svg";
import hamburger from "../assets/img/icons/mobileMenuOpen.svg";
import word from "../assets/img/logo/tecktriathlon-white.svg";
import cubespng from "../assets/img/icons/mobileMenuCubes.png";
import logo from "../assets/img/logo/amsel-logo-bird-small-white-new.svg";

const MobileMenu = (props) => (
  <div
    align="right"
    css={{
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      height: "84px",
      "@media(min-width: 820px)": {
        display: "none"
      }
    }}
  >
    <input
      type="image"
      onClick={props.toggleMenu}
      src={getImageUrl(hamburger)}
      css={{ width: "32px", height: "24px", cursor: "pointer" }}
      alt="Open menu"
    />
    <div
      className={props.isMenuVisible ? "no-scroll" : ""}
      css={{
        display: props.isMenuVisible ? "block" : "none",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        top: "0px",
        left: "0px",
        zIndex: "5",
        background: "#020066"
      }}
    >
      <input
        type="image"
        align="right"
        css={{ padding: "32px" }}
        src={getImageUrl(menuClose)}
        onClick={props.toggleMenu}
        alt="Close menu"
      />
      <div
        css={{
          marginTop: "100px",
          color: "white",
          display: "grid",
          gridTemplateColumns: "1fr"
        }}
      >
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            " a": {
              color: "white",
              textTransform: "uppercase",
              ":hover": {
                color: "#fedb01"
              }
            }
          }}
        >
          
          {props.menuItems.map((i) => (
            <div key={i} css={{ paddingBottom: "24px" }}>
              <a
                href={`#${i}`}
                onClick={props.toggleMenu}
                css={{ fontWeight: "bold" }}
              >
                {i}
              </a>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  </div>
);

export default MobileMenu;
