
import React from "react";
import Link from "next/link";

function NavBar () {
    return (
        <>
        {/* Vertical Navigation Bar */}
      <nav className='w-64 bg-black shadow-lg h-screen fixed left-0 top-0 p-4 flex flex-col space-y-4'>
      <div className='mt-20 flex flex-col p'>
      <Link 
        href="/home"
        className='text-gray-100 hover:bg-gray-800 p-2 rounded-md m-5'
        >
        Home
      </Link>
      <Link 
        href="/search"
        className='text-gray-100 hover:bg-gray-800 p-2 rounded-md m-5'
        >
        Search
      </Link>
      <Link 
        href="/lists"
        className='text-gray-100 hover:bg-gray-800 p-2 rounded-md m-5'
        >
        Lists
      </Link>
      </div>
    </nav>
    </>
    )
};

export default NavBar;