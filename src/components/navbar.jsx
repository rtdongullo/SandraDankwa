import React, { useState } from 'react';

const Navbar = () => {
    // State to toggle the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 z-50 p-4">
            <div className="w-full flex justify-between items-center">
                {/* Logo */}
                <div className="text-yellow-600 text-xl font-bold flex flex-row space-x-1">
                    <a href="#">Sandra Dankwa</a>
                    <span className="h-2 w-2 rounded-full mt-4  bg-white animate-pulse"></span>
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

                {/* Navbar Links */}
                <div className="hidden lg:flex space-x-6">
                    <a href="#" className="text-yellow-600 hover:text-white font-semibold">
                        Home
                    </a>
                    <a href="#" className="text-yellow-600 hover:text-white font-semibold">
                        About Us
                    </a>
                    <a href="#" className="text-yellow-600 hover:text-white font-semibold">
                        Services
                    </a>
                    <a href="#" className="text-yellow-600 hover:text-white font-semibold">
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}>
                <a href="#" className="block text-white hover:text-gray-400 py-2">
                    Home
                </a>
                <a href="#" className="block text-white hover:text-gray-400 py-2">
                    About
                </a>
                <a href="#" className="block text-white hover:text-gray-400 py-2">
                    Services
                </a>
                <a href="#" className="block text-white hover:text-gray-400 py-2">
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
