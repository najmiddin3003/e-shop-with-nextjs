import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 bg-white">
      <Link href={"/"}>Image</Link>

      <div className="flex items-center space-x-2.5 text-sm">
        <div className="flex items-center gap-5">
          <Link href={"/"} className="mr-5 hover:text-gray-900 text-gray-950 ">
            Home Page
          </Link>
          <Link href={"/productss"} className="mr-5 text-gray-950 hover:text-gray-900">
            All products
          </Link>
        </div>
        <Link href={`/shopping-cart`}>
        <button className="border-2 bg-blue-600 text-white border-transparent  transition duration-500 hover:border-blue-600  hover:bg-transparent hover:text-black px-5 md:px-10 py-2.5 rounded-md cursor-pointer">
          My bag
        </button>
        </Link>
       
      </div>
    </div>
  );
};

export default Navbar;
