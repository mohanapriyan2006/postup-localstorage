import { createContext, useEffect, useState } from "react";
import { format } from "date-fns";
import useWindowSize from "../hooks/useWindowSize";

import React from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(
    JSON.parse(
      localStorage.getItem("postup-posts")
    )
  );
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { width } = useWindowSize();


  // search

  useEffect(() => {
    const filteredSearch = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(filteredSearch.reverse());
  }, [posts, search]);

  // new post

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    const datatime = format(new Date(), "MMMM dd, yyyy pp");

    const newPost = { id: `${id}`, title: postTitle, datatime, body: postBody };
    try {
      const allPosts = [...posts, newPost];
      localStorage.setItem("postup-posts", JSON.stringify(allPosts));
      setPosts(allPosts);
      setPostBody("");
      setPostTitle("");
      navigate("/");
      alert("Your post successfully posted ✅");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // postpage

  const handleDelete = async (id) => {
    try {
      const postList = posts.filter((post) => post.id !== id);
      localStorage.setItem("postup-posts", JSON.stringify(postList));
      setPosts(postList);

      navigate("/");
      alert("Post successfully deleted ✅");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // edit page

  const handleEdit = async (id) => {
    try {
      const date = format(new Date(), "MMMM dd, yyyy pp");
      const editedPost = {
        id,
        title: editTitle,
        datatime: date,
        body: editBody,
      };
      const allPosts = posts.map((post) =>
        post.id === id ? { ...editedPost } : post
      );
      localStorage.setItem("postup-posts", JSON.stringify(allPosts));
      setPosts(allPosts);
      setEditBody("");
      setEditTitle("");
      navigate("/");
      alert("Post successfully edited ✅");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <DataContext.Provider
      value={{
        width,
        posts,
        setPosts,
        search,
        setSearch,
        searchResult,
        setSearchResult,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
        handleSubmit,
        handleDelete,
        handleEdit,
        navigate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
