import React, {useState} from 'react'
import Logo3 from '../assets/logo3.png' 
import {FaBars, FaTimes, FaGithub, FaLinkedin,FaInstagram, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from "react-scroll"


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo3} alt="Logo" style={{width: '100px'}} />
      </div>
 {/* menu */}
        <ul className='hidden md:flex'>
            <li>
            <Link 
       
      to="home" 
      
      smooth={true} 
       
      duration={500} 
      
    >
      Home
    </Link>
            </li>
            <li>
            <Link 
       
       to="about" 
       
       smooth={true} 
        
       duration={500} 
       
     >
       About
     </Link>
            </li>
            <li>
            <Link 
       
       to="skills" 
       
       smooth={true} 
        
       duration={500} 
       
     >
       Skills
     </Link>
            </li>
            <li>
            <Link 
       
       to="work" 
       
       smooth={true} 
        
       duration={500} 
       
     >
       Work
     </Link>
            </li>
            <li>
            <Link 
       
       to="contact" 
       
       smooth={true} 
        
       duration={500} 
       
     >
       Contact
     </Link>
            </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}

        </div>


        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            
            
            <li  className='py-6 text-4xl'>
            <Link 
            onClick={handleClick}
       
       to="home" 
       
       smooth={true} 
        
       duration={500} 
       
     >
       Home
     </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}
       
       to="about" 
       
       smooth={true} 
        
       duration={500} 
       
     >
       About
     </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}
       
       to="skills" 
       
       smooth={true} 
        
       duration={500} 
       
     >
       Skills
     </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}
       
       to="work" 
       
       smooth={true} 
        
       duration={500} 
       
     >
       Work
     </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}
       
       to="contact" 
       
       smooth={true} 
        
       duration={500} 
       
     >
       Contact
     </Link>
            </li>
        </ul>


        {/* social menu */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-4px] duration-300 bg-pink-700'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.instagram.com/nawaz_nehal/'>
                        Instagram <FaInstagram size={30}/>

                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-4px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/nawaznehal'>
                        Github <FaGithub size={30}/>

                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-4px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://gmail.com'>
                        Email <HiOutlineMail size={30}/>

                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-4px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='/'>
                        Resume <BsFillPersonLinesFill size={30}/>

                    </a>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar
