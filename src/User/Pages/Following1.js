import React from 'react';
import Avatar from 'D:/Studies/Github/Pandora/node_modules/@mui/material/Avatar';

function Following1({ username, caption, imageUrl}) {
  return <div className="post">
  <div class="max-w-xl bg-white border border-gray-200 mr-5 mb-11 shadow-md">
    <div class="flex items-center px-5">
      <Avatar 
        class="px-2"
        alt="Bhavya"
        src="/static/images/avatar/1.jpg">
        </Avatar>
        <h3> {username} </h3>
    </div>
    
    {/* header*/}

    <img class="w-full object-contain border-t-gray-700 border-b-gray-700" src= { imageUrl } alt=""></img>
    {/* image */}
      <h4 class="font-normal p-5"><strong> {username} </strong> {caption} </h4>
  </div>
  </div>;
}

export default Following1;