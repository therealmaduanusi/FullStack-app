// import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listOfPost, setListOfPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/post").then((response) => {
      setListOfPost(response.data);
    });
  }, []);
  return (
    <div>
      {listOfPost.map((value, key) => {
        return (
          <div
            className="post"
            key={key}
            onClick={() => {
              navigate(`post/${value.id}`);
            }}
          >
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
