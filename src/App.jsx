import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Contact, Blog, BlogPage } from './pages'
import { Navbar, Footer } from './component'

const App = () => {
  return (
    <>
      <Navbar />
      <main className="w-full bg-gray-100/50 min-h-[calc(100vh -73px )]  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogpage" element={< BlogPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
