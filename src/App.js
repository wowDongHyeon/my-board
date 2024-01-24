import React, { useState } from 'react';
import Board from './components/Board';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '첫 번째 게시글2', author: '홍길동', content: '리액트에서 상태 관리는 애플리케이션의 효율성과 유지보수성에 큰 영향을 미칩니다. 상태 관리의 핵심은 각 컴포넌트의 상태를 적절히 관리하고, 필요한 데이터를 효율적으로 전달하는 것입니다.    초기의 리액트 애플리케이션에서는 주로 `useState`와 `useReducer` 훅을 사용하여 로컬 상태를 관리했습니다. 그러나 애플리케이션의 규모가 커지고, 상태 관리의 복잡성이 증가함에 따라 Redux, MobX, Recoil과 같은 상태 관리 라이브러리의 사용이 보편화되었습니다.        이러한 라이브러리들은 애플리케이션의 다양한 부분에서 발생하는 상태를 중앙에서 효율적으로 관리할 수 있게 해줍니다. 이를 통해 컴포넌트 간 상태 공유가 용이해지고, 코드의 가독성이 좋아집니다.' },  
    { id: 2, title: '두 번째 게시글1', author: '김철수', content: '리액트는 모던 자바스크립트와 밀접하게 연결되어 있습니다. ES6(ES2015) 이후의 자바스크립트는 클래스, 화살표 함수, 비구조화 할당, 모듈입니다.' },    // 여기에 더 많은 게시글 추가
    // ...
  ]);

  const [activePost, setActivePost] = useState(null);

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
        <Board posts={posts} onPostClick={handlePostClick} />
      )}
    </div>
  );
}

export default App;
