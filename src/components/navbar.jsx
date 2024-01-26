import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import JB from '../assets/JB.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={JB} alt='Logo' style={{ width: '50px' }} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='Home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='About' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='Skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='Work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to='Gallery' smooth={true} duration={500}>
                        Gallery
                    </Link>
                </li><li>
                    <Link to='Contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>


            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center items-center '}>

                <li className='py-6 text-4xl'>
                    <Link onclick={handleClick} to='Home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onclick={handleClick} to='About' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onclick={handleClick} to='Skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onclick={handleClick} to='Work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onclick={handleClick} to='Contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>

            </ul>


            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600'>
                        <a className='flex  justify-between items-center w-full text-gray-300  bg-blue-600'
                            href="https://www.linkedin.com/in/joel-buchman-832b9363/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#ffffff]]'>
                        <a className='flex  justify-between items-center w-full text-gray-300 '
                            href="https://github.com/Joel-Buchman/portfolio.git">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]'>
                        <a className='flex  justify-between items-center w-full text-gray-300 '
                            href="https://drive.google.com/file/d/1CHZl8mcEw1DI1UKBveaT_rZ5-72iWxEw/view?usp=sharing">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>


        </div >
    )
}

export default Navbar;