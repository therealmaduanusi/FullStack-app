import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <div>
      <Link to='/createPost'>Create Post</Link><br />
      <Link to='/'>Home</Link>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/createPost" element={<CreatePost />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
