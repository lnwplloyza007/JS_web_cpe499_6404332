import React from 'react';
import { User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center py-4 px-6 lg:px-12">
      <div className="text-2xl font-bold">Thananya World</div>
      <div className="flex items-center space-x-6">
        <a href="#" className="hover:text-gray-300">Equipment</a>
        <a href="#" className="hover:text-gray-300">About us</a>
        <a href="#" className="hover:text-gray-300">Blog</a>
        <a href="#" className="flex items-center hover:text-gray-300">
          <User className="mr-2" size={20} />
          Account
        </a>
      </div>
    </nav>
  );
};

export default Navbar;