import React from "react";
import { IoIosBug } from 'react-icons/io';

export default function NavbarHz() {
  return (
    <div className=" sticky top-0 ">
      <nav class="bg-gray-900 ">
       
          <div className="flex">
            <div className="flex space-x-4 text-white text-6xl ml-10">
              <IoIosBug size="70"/>CollegeQuora
            </div>
          </div>
        
      </nav>
    </div>
  );
}
