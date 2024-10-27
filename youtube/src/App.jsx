import React, { useState } from "react";
import "./components/style.css"
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/search";
import PlayingVideo from "./components/PlayingVideo";
import { useAuth } from "./context/AuthProvider";
import Loading from "./loader/Loading";
import Login from "./components/Login";
import Register from "./components/Register";
import ChannelPage from "./components/ChannelPage";

function App() {
  const { loading } = useAuth();
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div>
      {loading && <Loading />}
      <Navbar user={user} setUser={setUser} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path ="/channelpage" element= {<ChannelPage/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
}

export default App;

