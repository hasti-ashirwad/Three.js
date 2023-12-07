import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { navLinks } from "../constants/index";
import icon from "../assets/company/i.png"
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center fixed top-0 z-10`}
        style={{backgroundColor:"rgb(27 76 149)"}}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);

          }}
        >
          <img src={icon} alt='logo' style={{height:"5rem",width:"15rem"}} />
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li>
              <a href={`#${nav.id}`}>{nav.title}</a>

            </li>))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
        {toggle ? (
        <CgClose
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle(!toggle)}
          alt='close'
        />
      ) : (
        <CgMenuRight
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle(!toggle)}
          alt='menu'
        />
      )}
      <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-12 text-white black-gradient absolute top-20 right-0 mx-2 my-5 min-w-[260px]  min-h-[60px] z-0 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-black"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
