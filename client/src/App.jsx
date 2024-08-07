import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/createPost'>Create Post</Link><br />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/createPost" element={<CreatePost />}/>
        <Route path="/post/:id" element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;
