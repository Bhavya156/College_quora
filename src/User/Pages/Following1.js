import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { IconButton } from "@mui/material";

function Following1({ username, caption, imageUrl, id }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  /* database function for comments */
  const postComment = (event) => {};
  /* Upvote */

  const [Like, setLike] = useState(0);
  const [Dislike, setDislike] = useState(0);

  return (
    <div>
      <div class="max-w-xl bg-white border border-gray-200 mr-5 mb-11 shadow-md">
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
        <div class="hidden">{id}</div>
        {/* image */}

        {/*Upvote Button */}
        <div>
          <IconButton
            id={id}
            class="px-5 pt-2.5"
            onClick={() => setLike(Like + 1)}
          >
            {Like}
            <FaRegThumbsUp size={"25"} />
          </IconButton>

          <IconButton
            id={id}
            class="px-2.5 pt-2.5"
            onClick={() => setDislike(Dislike + 1)}
          >
            {Dislike}
            <FaRegThumbsDown size={"25"} />
          </IconButton>
        </div>

        <h4 class="font-normal p-5">
          <strong> {username} </strong> {caption}{" "}
        </h4>
        {/*caption */}

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
            onChange={(e) => setComment(e.target.value)}
          />

          <button
            class="flex-initial border-none border-t-gray-300 bg-transparent text-sky-600 pr-2.5"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Following1;
