import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import PostFormModal from './components/PostFormModal';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSavePost = (newPost) => {
    fetch('http://10.101.52.96:8080/writeBoard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
    .then(response => response.json())
    .then(data => {
      // 여기서 게시글 목록을 업데이트하거나 사용자에게 알림을 보낼 수 있습니다.
      if (data.result === 'success') {
        // 저장 성공 시 게시글 목록 다시 불러오기
        loadPosts();
      }
      setShowModal(false);
    })
    .catch(error => console.error('Error posting data:', error));
  };

  const handleDeletePost = (postId) => {
    fetch('http://10.101.52.96:8080/deleteBoard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ boardId: postId })
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        // 삭제 성공 시 게시글 목록 다시 불러오기
        loadPosts();
      }
    })
    .catch(error => {
      console.error('Error deleting data:', error);
    });
  };

// 게시글 목록 불러오는 함수
const loadPosts = () => {
  fetch('http://10.101.52.96:8080/selectBoardAll')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(error => console.error('Error fetching data:', error));
};

  useEffect(() => {
    loadPosts();
  }, []);

  const handlePostClick = (post) => {
    setActivePost(post);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>나의 게시판</h1>
      </header>
      {activePost ? (
        <div>
          <h2>{activePost.title}</h2>
          <p>{activePost.content}</p>
          <button onClick={() => setActivePost(null)}>목록으로 돌아가기</button>
        </div>
      ) : (
        <Board posts={posts} onPostClick={handlePostClick} onDeleteClick={handleDeletePost} />
      )}
      <button onClick={handleAddPost}>글 추가하기</button>
      {showModal && <PostFormModal onClose={handleCloseModal} onSave={handleSavePost} />}
    </div>
  );
}

export default App;