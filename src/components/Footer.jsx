import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import "../style/footer.css";
import img1 from "../assets/company/i.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section p-4 md:p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <Link to='/' onClick={goToBtn}>
                <img alt='' src={img1} className="h-16 w-auto" />
              </Link>
            </div>
            <p className="text-white">
              <Link to='/' onClick={goToBtn} className="mr-2">Home</Link> |
              <ScrollLink to='services' spy={true} smooth={true} offset={-380} duration={500} className="mr-2">Services</ScrollLink> |
              <ScrollLink to='career' spy={true} smooth={true} offset={-150} duration={500} className="mr-2">Career</ScrollLink> |
              <ScrollLink to='contact' spy={true} smooth={true} offset={-150} duration={500}>Contact</ScrollLink>
            </p>
            <p className="text-white text-top copyright mt-4">Copyright © 2023 Ashirwad Infotech All rights reserved</p>
          </div>
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <h3 className="text-white mb-5">Office<div><span></span></div> </h3>
            </div>
            <div className='mb-4 text-white'>
              <p>418-419, Laxmi Enclave-2,</p>
              <p>katargam, Surat</p>
            </div>
            <Link to='' className="text-white text-decoration-none" onClick={() => window.location = 'mailto:info@ashirwadinfotech.com'}>
              <p className='email-id'>info@ashirwadinfotech.com</p>
            </Link>
            <Link to='' className="text-white text-decoration-none" onClick={() => window.location = 'https://wa.me/917600273027'}>
              <h4 className='no'>(+91) 7600273027</h4>
            </Link>
          </div>
          <div>
            <div className="mb-4">
              <h3 className="text-white mb-2">Newsletter <div><span></span></div></h3>
            </div>
            <div className="mb-4 text-white">
              <p>Our main goal is the satisfaction of clients and growing business relationships. we are working for turning your idea into reality</p>
            </div>
            <div className='flex space-x-4 social-icons'>
              <Link to='' onClick={() => window.location = 'mailto:info@ashirwadinfotech.com'}>
                <AiOutlineMail className='Mail' />
              </Link>
              <Link to='' onClick={() => window.location = 'https://www.linkedin.com/company/ashirwad-infotech/'}>
                <BsLinkedin className='Linkdin' />
              </Link>
              <Link to='' onClick={() => window.location = 'https://wa.me/917600273027'}>
                <BsWhatsapp className='Whatsapp' />
              </Link>
              <Link to='' onClick={() => window.location = 'https://g.page/Laxmi-Enclave-2?share'}>
                <HiLocationMarker className='Marker' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-white mt-5 mb-2" />
      <p className="text-white text-top hidecopyright">Copyright © 2023 Ashirwad Infotech All rights reserved</p>
    </footer>
  );
};

export default Footer;
