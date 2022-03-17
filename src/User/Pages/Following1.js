import React from "react";
import { Avatar } from "@mui/material";

function Following1({ username, caption, imageUrl }) {
  return (
    <div class="post">
      <div class="max-w-xl bg-white border border-gray-200 mr-5 mt-10 shadow-md">
        <div class="flex items-center px-5 pt-2 pb-2 ">
          <Avatar
            class="px"
            alt="Bhavya"
            src="/static/images/avatar/1.jpg"
          ></Avatar>
          <div class="pl-2">
            <h3> {username} </h3>
          </div>
        </div>

        {/* header*/}

        <img
          class="w-full object-contain border-t-gray-700 border-b-gray-700"
          src={imageUrl}
          alt=""
        ></img>
        {/* image */}
        <h4 class="font-normal p-5">
          <strong> {username} </strong> {caption}{" "}
        </h4>
      </div>
    </div>
  );
}

export default Following1;
