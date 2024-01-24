import React from 'react';

const Board = ({ posts, onPostClick }) => {
  return (
    <div className="Board">
      <h2>게시판</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} onClick={() => onPostClick(post)}>
            <strong>{post.title}</strong> - <span>{post.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
