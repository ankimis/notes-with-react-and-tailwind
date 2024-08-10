import React, { useState, useEffect } from "react";
import appwriteservice from "../appwrite/config";
import { Container, Post } from "../componenets";

function AllPosts() {
  const [posts, setposts] = useState([]);
  useEffect(()=> {
    appwriteservice.getPosts([]).then((posts) => {
      if (posts) {
        setposts(posts.documents);
      }
    });
   }, []);



  return (
    <div className="w-full py-8">
      <Container>
        <div className="flexflex-wrap">
          {posts.map((post) => (
            <div key={post.$id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
