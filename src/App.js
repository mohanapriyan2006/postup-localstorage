import "./App.css";
import "./components/styles/style.css";
import React from "react";
import { Home } from "./components/Home";
import { NewPost } from "./components/NewPost";
import { PostPage } from "./components/PostPage";
import { About } from "./components/About";
import { Missing } from "./components/Missing";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import EditPost from "./components/EditPost";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Nav title={'postUp'}/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post">
              <Route index element={<NewPost />} />
              <Route path=":id" element={<PostPage />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </div>
        <Footer />
      </DataProvider>
    </div>
  );
};

export default App;
