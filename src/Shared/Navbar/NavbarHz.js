import React from "react";
import { BsFillInboxesFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../../User/Pages/Login.js";
import Ask from "../../User/Pages/Ask.js";

export default function NavbarHz() {
  return (
    <header class="body-font bg-yellow-300 sticky top-0">
      <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <div class="flex title-font font-medium items-center text-indigo-500 mb-4 md:mb-0">
          <BsFillInboxesFill size="30" color="rgb(99 102 241)" />

          <span class="ml-3 text-2xl text-indigo-500 font-nunito ">
            Pandora
          </span>
        </div>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center nunito">
          <Link to="/signup">
            <div
              class="mr-5 text-indigo-500 hover:bg-yellow-500 hover:text-white
                    px-3 py-2 rounded-md text-medium font-nunito "
            >
              
              <div className="navbar-icon group">
   Ask

    <span class="navbar-tooltip group-hover:scale-100">Ask</span>
  </div>
            </div>
          </Link>
          <Link to="/test">
          <div
            class="mr-5 text-indigo-500 hover:bg-yellow-500 hover:text-white
                    px-3 py-2 rounded-md text-medium  font-nunito "
          >
            Test
          </div>
          </Link>
          <Link to="/events">
          <div
            class="mr-5 text-indigo-500 hover:bg-yellow-500 hover:text-white
                    px-3 py-2 rounded-md text-medium  font-nunito"
          >
            Events
          </div>
          </Link>
          <Link to="/following">
          <div
            class="mr-5 text-indigo-500 hover:bg-yellow-500 hover:text-white
                    px-3 py-2 rounded-md text-medium  font-nunito "
          >
            Following
          </div>
          </Link>
        </nav>
        <button class="inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-500 hover:text-white rounded text-base mt-4 md:mt-0 text-indigo-500 text-medium font-nunito">

          <svg fill="none" stroke-width="2" class="w-8 h-8 ml-1">
            <CgProfile size="30" />
          </svg>
        </button>
      </div>
    </header>
  );
}
