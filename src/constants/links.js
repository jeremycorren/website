import * as React from "react"
import {
  FaInstagram as Instagram,
  FaBandcamp as Bandcamp,
  FaMailBulk as Mail
} from "react-icons/fa"

export const menuItems = [
  {
    path: "/",
    text: "home",
  },
  {
    path: "/about",
    text: "about",
  },
  {
    path: "/media",
    text: "media",
  }
]

export const socialItems = [
  {
    path: "www.instagram.com/jeremy.corren",
    icon: <Instagram />,
  },
  {
    path: "www.jeremycorren.bandcamp.com",
    icon: <Bandcamp />,
  },
  {
    path: "mailto:",
    icon: <Mail />,
  }
]
