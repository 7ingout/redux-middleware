import './App.css';
import CounterContainer from './components/CounterContainer';
import PostListContainer from './components/PostListContainer';
import { Routes, Route } from 'react-router-dom';
import PostListPage from './page/PostListPage';
import PostPage from './page/PostPage';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <Routes>
        <Route path="/" element={<PostListPage/>}/>
        <Route path="/:id" element={<PostPage/>}/>
      </Routes>
      <PostListContainer />
    </div>
  );
}

export default App;
