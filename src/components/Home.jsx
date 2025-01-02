import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "../context/DataContext";

export const Home = () => {
  const { searchResult, fetchError, isLoading, setPosts } =
    useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && (
        <p style={{ color: "blue", textAlign: "center" }}>
          Posts are Loading...
        </p>
      )}
      {fetchError && (
        <p style={{ color: "red", textAlign: "center" }}>{fetchError}</p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResult.length ? (
          <Feed posts={searchResult} />
        ) : (
          <center>
            <p style={{ marginTop: "2rem",color: 'red' }}>
              No posts to display ! <br /> <br />{" "}
            </p>
            <p>Add some default Posts by click below button</p>
            <button
            style={{marginBottom: '10%'}}
              className="edit-btn"
              onClick={() => {
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
              }}
            >
              Add
            </button>
          </center>
        ))}
    </main>
  );
};
