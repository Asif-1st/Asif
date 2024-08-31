import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {

    const links = [{
        id:1,
        href: '/',
        text: 'Home'
    },
    {
        id:2,
        href: '/about',
        text: 'About'
    },
    {
        id:3,
        href: '/works',
        text: 'Works'
    },
    {
        id:3,
        href: '/Reviews',
        text: 'Testimonials'
    },
    {
        id:5,
        href: '/contact',
        text: 'Contact'
    }];

    // toggle navigation functionality
    const [showMenu, setShowMenu] = useState(false);

    // nav shadow handler 
    const [navShadow, setNavShadow] = useState(false);
    
    // scroll event listener
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavShadow(true);
        } else {
            setNavShadow(false);
        }
    }

    // add scroll event listener
    window.addEventListener('scroll', handleScroll);

    const linkActive = ({isActive}) => isActive ? ' text-md font-semibold rounded-md md:px-4 bg-black text-white md:py-2 cursor-pointer' : 'md:px-4 rounded-md md:py-2 bg-white text-black ';
    return (
        <>
            <div id="nav" className={` sticky top-0 bg-white ${navShadow ? "shadow-md" : 'shadow-none'}`}>
                <div className="flex justify-center items-center w-11/12 md:w-4/5 mx-auto">
                    <nav className=" flex justify-between items-center w-full py-5">
                        {/* logo  */}
                        <h3 className=" text-black text-2xl font-bold">@sif.dev</h3>
                        <div className=" md:hidden text-2xl" onClick={() => {
                            setShowMenu(true);
                        }}>
                            <IoMenu />
                        </div>
                        <ul className="md:flex justify-center items-center hidden">
                            {links.map((links) => {
                                return (
                                    <li key={links.id} className={""}>
                                        <NavLink to={links.href} className={linkActive}>{links.text}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                <ul id="navlist" className={`flex-col w-1/2 justify-center transform origin-right items-center md:hidden absolute top-0 right-0 bg-white transition-transform shadow-md h-screen ${showMenu ? "scale-x-100" : "scale-x-0"}`}>
                    <div className="text-2xl m-3" onClick={() => {
                        setShowMenu(false);
                    }}>
                        <FaXmark />
                    </div>
                    {links.map((links) => {
                        return (
                            <li key={links} className={' md:mr-6 relative left-0 top-0 pt-8 pl-5'}>
                                <NavLink to={links.href} className=" text-sm font-semibold cursor-pointer">{links.text}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Navbar;

