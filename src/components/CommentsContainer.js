import React from "react";
const commentsData = [
  {
    name: "Aravind",
    text: "my comment",
    replies: [
      {
        name: "Stranger",
        text: "my comment",
        replies: [
          {
            name: "Anonymous",
            text: "my comment",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Aravind",
    text: "my comment",
    replies: [],
  },
  {
    name: "Aravind",
    text: "my comment",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-1">
      <img
        className="w-10 h-10"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
