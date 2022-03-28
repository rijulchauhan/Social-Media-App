import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./index.js";
import Explore from "./explore";
import Posts from "./posts.js";

export default function HomePage() {
    return (
        <>
            Hi, Rijul :)<br />
            <NavLink to='/'>Home</NavLink><br />
            <NavLink to='/direct/inbox/'>Profile</NavLink><br />
            <NavLink to='/explore/'>Explore</NavLink><br />
            <Routes>
                <Route path="/direct/inbox" element={<Index />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/" element={<Posts />} />
            </Routes>
        </>
    )
}