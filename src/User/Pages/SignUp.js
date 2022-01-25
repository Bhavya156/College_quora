import React from "react";

export default function SignUp() {
  return (
    <div>
      <div
        className="bg-black-landing
                      w-full bg-cover bg-no-repeat flex h-screen justify-center items-center">

        <div class="bg-white p-9 rounded shadow-2x1 w-80 m-0 flex-col">
          <div class="text-xl font-bold mb-4 text-gray-900">Create your Account</div>
          <form class="space-y-4">

          <div>
              <label class="block mb-1 font-bold text-gray-500">Name</label>
              <input
                type="name"
                class="w-full border-2 border-gray-400 p-1 rounded outline-none focus:border-blue-400"
              ></input>
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Enrollment Number</label>
              <input
                type="text"
                class="w-full border-2 border-gray-400 p-1 rounded outline-none focus:border-blue-400"
              ></input>
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Email</label>
              <input
                type="email"
                class="w-full border-2 border-gray-400 p-1 rounded outline-none focus:border-blue-400"
              ></input>
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Password</label>
              <input
                type="password"
                class="w-full border-2 border-gray-400 p-1 rounded outline-none focus:border-blue-400"
              ></input>
            </div>
            
            <div>
            <label class="block mb-1 font-bold text-gray-500">Institute</label>
            
            <select class="w-full border-2 border-gray-400 p-1 rounded outline-none focus:border-blue-400">
                    
                    <option value="CSPIT">DEPSTAR</option>
                    <option value="DEPSTAR">CSPIT</option>
                    <option value="RPCP">RPCP</option>
                    <option value="IIIM">IIIM</option>
                    <option value="PDPIAS">PDPIAS</option>
                    <option value="CIN">CIN</option>
            </select>
            
          </div>
          <div className="italic underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            <a href="#">Already have an account?</a>
          </div>


            <button class="block w-full bg-yellow-400 p-4 rounded text-gray-900 hover:bg-yellow-500 hover:text-gray-100 transition duration-300">
            Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

