// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"
import { Header } from "./components/Header/Header"
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/tile/:tileID" element={<Category />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>  
  )
}

export default App
