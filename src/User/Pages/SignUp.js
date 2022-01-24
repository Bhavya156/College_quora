import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";

export default function SignUp() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-black-landing
                      w-full bg-cover bg-no-repeat flex h-screen justify-center items-center">

        <div class="bg-white p-8 rounded shadow-2x1 w-80 m-0 flex-col">
          <h2 class="text-3x1 font-bold mb-4 text-purple-800">Login</h2>
          <form class="space-y-4">
            <div>
              <label class="block mb-1 font-bold text-gray-500">Email</label>
              <input
                type="email"
                class="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-blue-400"
              ></input>
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Password</label>
              <input
                type="password"
                class="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-blue-400"
              ></input>
            </div>

            <button class="block w-full bg-red-600 p-4 rounded text-gray-100 hover:bg-red-500 hover:text-gray-300 transition duration-300">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

