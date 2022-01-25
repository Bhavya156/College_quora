import React from "react";
import { BsFillInboxesFill } from "react-icons/bs";

export default function NavbarHz() {
  return (
    <div className=" sticky top-0 ">
      <nav class="bg-yellow-600">
        <div className="flex items-center">
          <div className="ml-5">
            <BsFillInboxesFill size="55" color="white" />
          </div>
          <div className=" text-white text-5xl ml-1 py-2">
            <div className="px-2">Pandora
            <div className="relative text-xl translate-x-10 inline">Ask</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
