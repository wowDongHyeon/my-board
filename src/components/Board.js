import React from 'react';

const Board = ({ posts, onPostClick, onDeleteClick }) => {
  return (
    <div className="Board">
      <h2>게시판</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} onClick={() => onPostClick(post)}>
            <strong>{post.title}</strong> - <span>{post.writer}</span>
            <div className="delete-button-container">
              <button onClick={(e) => { e.stopPropagation(); onDeleteClick(post.id); }}>삭제</button>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Board;
