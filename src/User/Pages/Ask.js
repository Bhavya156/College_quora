
import React, {useState} from "react";


function Ask() {
  let [images,setimages] = useState([]);
  return (
    
    <div class="bg-orange-100 h-screen grid">
      <div class="flex flex-col max-w-5xl md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-36 mx-96">
        <div class="md:flex items-center justify-center md:w-1/2 md:bg-yellow-300">
          <div class="py-6 px-8 md:py-0">
            <h2 class="text-gray-700 text-2xl font-bold md:text-indigo-500">
              You're one step away from finding the solution!
            </h2>
            <p class="mt-2 text-gray-600 md:text-indigo-500">
              Drop your question here.
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-yellow-300">
          <form>
            <div class="flex flex-col rounded-lg overflow-hidden sm:flex-row">
              <input
                class="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100 w-full"
                type="text"
                name="email"
                placeholder="Type out the question"
              />
              
              <button class="py-3 px-4 bg-yellow-300 text-indigo-500 font-semibold uppercase hover:bg-gray-600 ">
                Post
              </button>
              <input
                class=""
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setimages([...e.target.files]);
                }}
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Ask;
