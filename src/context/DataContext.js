import { createContext, useEffect, useState } from "react";
import { format } from "date-fns";
import useWindowSize from "../hooks/useWindowSize";

import React from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { width } = useWindowSize();

  useEffect(() => {
    const initData = [
      {
        id: "1",
        title: "The Importance of Digital Marketing in 2025",
        datatime: "January 05, 2024 10:00 AM",
        body: "Digital marketing has become an essential part of modern business strategies. In 2025, the focus on personalized customer experiences and the use of AI-driven tools are expected to drive even greater engagement and ROI. Businesses that adapt to these changes will remain competitive in the evolving marketplace.",
      },
      {
        id: "2",
        title: "The Future of AI in Marketing",
        datatime: "February 15, 2024 03:30 PM",
        body: "Artificial Intelligence is revolutionizing marketing by enabling hyper-personalized campaigns and predictive analytics. Companies leveraging AI tools are seeing higher engagement and better customer retention.",
      },
      {
        id: "3",
        title: "Top 5 Trends in Social Media for 2025",
        datatime: "March 22, 2024 11:45 AM",
        body: "Social media platforms are evolving rapidly, with trends like short-form videos, influencer marketing, and social commerce taking center stage. Brands must adapt to stay relevant in this dynamic space.",
      },
      {
        id: "4",
        title: "Sustainability in E-commerce",
        datatime: "April 10, 2024 08:15 PM",
        body: "Consumers are increasingly prioritizing eco-friendly practices. E-commerce businesses adopting sustainable packaging and ethical sourcing are gaining customer trust and loyalty.",
      },
      {
        id: "5",
        title: "Why SEO Still Matters *",
        datatime: "January 01, 2025 1:23:03 PM",
        body: "Search Engine Optimization remains a cornerstone of digital marketing. With constant algorithm updates, staying informed and optimizing content for search engines is crucial for driving organic traffic.",
      },
    ];
    localStorage.setItem("postup-posts", JSON.stringify(initData));
    setPosts(JSON.parse(localStorage.getItem("postup-posts")));
  }, []);

  // search

  useEffect(() => {
    const filteredSearch = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(filteredSearch);
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
