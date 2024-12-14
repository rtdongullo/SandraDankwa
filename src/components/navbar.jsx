import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    // State to toggle the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-black z-50 p-4">
            <div className="w-full flex justify-between items-center">
                
                <div className="text-yellow-600 text-xl font-bold flex flex-col space-x-1">
                    <span className="flex justify-center items-center">
                        <a href="#">SanDan94</a>
                    </span>
                    <span className="text-white text-sm"> E N T E R P R I S E</span>
                </div>

                {/* Hamburger Menu (mobile) */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-yellow-600">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>


                <div className="hidden lg:flex space-x-6">
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="text-yellow-600 hover:text-white font-semibold cursor-pointer">
                        Home
                    </Link>

                    <Link
                        to="aboutUs"
                        smooth={true}
                        duration={500}
                        className="text-yellow-600 hover:text-white font-semibold cursor-pointer"
                    >
                        About Us
                    </Link>

                    <Link
                        to="services"
                        smooth={true}
                        duration={500}
                        className="text-yellow-600 hover:text-white font-semibold cursor-pointer"
                    >
                        Products
                    </Link>

                    <Link
                        to="contactUs"
                        smooth={true}
                        duration={500}
                        className="text-yellow-600 hover:text-white font-semibold cursor-pointer"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>


            <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black p-4`}>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="block text-white hover:text-gray-400 py-2"
                >
                    Home
                </Link>

                <Link
                    to="aboutUs"
                    smooth={true}
                    duration={500}
                    className="block text-white hover:text-gray-400 py-2"
                >
                    About Us
                </Link>

                <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className="block text-white hover:text-gray-400 py-2"
                >
                    Our Products
                </Link>

                <Link
                    to="contactUs"
                    smooth={true}
                    duration={500}
                    className="block text-white hover:text-gray-400 py-2"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
