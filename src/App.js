import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Search from "./pages/Search";

export default function App() {
  const [backendData, setBackendData]= useState([{}])
  useEffect(() => {

  fetch("/api").then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
} ,[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/result" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

