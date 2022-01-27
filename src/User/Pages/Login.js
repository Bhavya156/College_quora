import React from "react";



export default function Login() {
  return (
    <div>
      <div
        className="bg-login
                      w-full bg-cover bg-no-repeat flex h-screen justify-center items-center">

        <div class="bg-white p-8 rounded shadow-2x1 w-80 m-0 flex-col">
          <h2 class="text-3xl text-center font-bold mb-4 text-indigo-500">Login</h2>
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

            <button class="block w-full bg-yellow-300 p-4 rounded text-indigo-500 hover:bg-yellow-500 hover:text-white font-bold transition duration-300">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}