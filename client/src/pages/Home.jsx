// import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [listOfPost, setListOfPost] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/post").then((response) => {
      setListOfPost(response.data);
    });
  }, []);
  return (
    <div>
      {listOfPost.map((value, key) => {
        return (
          <div className="post" key={key}>
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
