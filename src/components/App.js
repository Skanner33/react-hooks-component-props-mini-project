import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <About/>
      <ArticleList/>
      <Header name={blogData.name}/>
      <Article/>
    </div>
  )
}

export default App;
