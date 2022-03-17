import React , { useState } from 'react';
import { Avatar } from '@mui/material';
import Upvote from './Upvote';

function Following1({ username, caption, imageUrl}) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  {/* database function for comments*/}
  const postComment = (event) => {

  }
  return <div>
  <div class="sticky top-0 max-w-xl bg-white border border-gray-200 mr-5 mb-11 shadow-md">
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
      
      <Upvote />
      {/*Comment Section database connection*/}
      <div class="p-5">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>
          {/* comment section form*/}
     <form class="flex mt=2.5">
        <input
          class="flex-1 border-none p-2.5 border-t-gray-300"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)} />

          <button
            class="flex-initial border-none border-t-gray-300 bg-transparent text-sky-600"
            disabled={!comment}
            type="submit"
            onClick={postComment} 
            >
            Post
            </button>
     </form>
  </div>
  </div>;
}

export default Following1;