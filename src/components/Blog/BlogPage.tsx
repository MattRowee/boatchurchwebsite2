import React, { useState } from "react";

interface BlogPageProps {
  isAdmin: boolean;
}

const BlogPage: React.FC<BlogPageProps> = ({ isAdmin }) => {
  const [newEntry, setNewEntry] = useState("");
  const [posts, setPosts] = useState<string[]>([]);

  const handleNewPost = async () => {
    if (newEntry.trim()) {
      const response = await fetch("http://localhost:5000/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ post: newEntry }),
      });

      if (response.ok) {
        setPosts((prevPosts) => [...prevPosts, newEntry]);
        setNewEntry("");
      }
    }
  };

  return (
    <div className="overlay">
      <h2>Blog</h2>
      {isAdmin && (
        <div>
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="Write a new blog entry"
          />
          <button onClick={handleNewPost}>Post</button>
        </div>
      )}
      <div>
        <h3>Posts</h3>
        {posts.map((post, index) => (
          <div key={index}>{post}</div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
