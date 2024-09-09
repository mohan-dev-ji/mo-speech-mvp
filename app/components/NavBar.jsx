"use client"; // Ensures this component runs on the client-side

import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavBar() {

  const pathname = usePathname(); // Get the current pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle


  const navItems = [
    { name: 'Home', path: '/', icon: '/icons/home.svg' },
    { name: 'Search', path: '/search', icon: '/icons/search.svg' },
    { name: 'Lists', path: '/lists', icon: '/icons/lists.svg' },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="fixed top-0 left-0 h-full lg:w-64 md:w-32 bg-black flex flex-col items-center">
      <div className='mt-12 hidden md:block'>
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`py-4 px-6 flex items-center justify-center ${
            pathname === item.path ? 'text-red-500' : 'text-white'
          }`}
          onClick={() => window.location.href = item.path}
        >
          <img
            src={item.icon}
            alt={item.name}
            className={`w-6 h-6 mr-4 ${
              pathname === item.path ? 'filter-red' : ''
            }`}
          />
          <span className="md:hidden lg:inline-block text-lg">{item.name}</span>
        </button>
      ))}
      </div>
    </nav>
    {/* NavBar for Small Screens */}
    <nav className="fixed top-0 left-0 w-full h-20 bg-black flex md:hidden items-center justify-between px-4 z-50">
    {/* Hamburger Icon */}
    {!isMenuOpen && (
      <button onClick={handleMenuToggle} className="text-white">
        <img src="/icons/hamburger.svg" alt="Menu" className="w-8 h-8" />
      </button>
    )}

    {/* Close Icon */}
    {isMenuOpen && (
      <button onClick={handleMenuToggle} className="text-white">
        <img src="/icons/close.svg" alt="Close" className="w-8 h-8" />
      </button>
    )}
  </nav>

  {/* Dropdown Menu for Small Screens */}
  {isMenuOpen && (
    <div className="fixed top-10 left-0 w-full bg-black h-full flex flex-col items-start justify-center md:hidden">
      <div className="w-full max-w-xs mx-auto">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`py-6 px-20 flex items-center w-full ${
            pathname === item.path ? 'text-red-500' : 'text-white'
          }`}
          onClick={() => {
            setIsMenuOpen(false);
            window.location.href = item.path;
          }}
        >
          <img
            src={item.icon}
            alt={item.name}
            className={`w-10 h-10 mr-6 ${
              pathname === item.path ? 'filter-red' : ''
            }`}
          />
          <span className="text-2xl">{item.name}</span>
        </button>
      ))}
      </div>
    </div>
  )}
</>
    
  );
}
