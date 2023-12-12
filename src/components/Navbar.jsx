import React from 'react'
import Sidebar from "./sidebar/Sidebar";
import { motion } from "framer-motion";
import "../style/Navbar.css";
import logo from "../assets/company/i.png";
import { Link } from "react-router-dom";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
const Navbar=()=> {
  return (
      <div className='navbar' id='Home'>
        <Sidebar/>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="logo" height={"80"} width="250" className="navbar-logo"/>
          </motion.span>
          <div className="social">
            <Link to='' onClick={() => window.location = 'mailto:info@ashirwadinfotech.com'}>
              <AiOutlineMail/>
            </Link>
            <Link to='' onClick={() => window.location = 'https://www.linkedin.com/company/ashirwad-infotech/'}>
              <BsLinkedin />
            </Link>
            <Link to='' onClick={() => window.location = 'https://wa.me/917600273027'}>
              <BsWhatsapp />
            </Link>
            <Link to='' onClick={() => window.location = 'https://g.page/Laxmi-Enclave-2?share'}>
              <HiLocationMarker />
            </Link>
          </div>
      </div>
  )
}

export default Navbar
