import React from "react"
import { FaHome ,FaPen,FaEnvelope} from "react-icons/fa";


const data = [
  {
    id: 1,
    text: "ホーム",
    icon:<FaHome/>,
    url: "/",
  },
  {
    id: 2,
    text: "事業概要",
    icon:<FaPen/>,
    url: "/about/",
  },
  {
    id: 3,
    text: "お問い合わせ",
    icon:<FaEnvelope/>,
    url: "/contact/",
  },
]

export default data
