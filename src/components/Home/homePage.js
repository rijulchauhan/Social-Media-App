import { NavLink } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Index from "./index.js";
import Explore from "./explore";
import Posts from "./posts.js";

export default function HomePage({ handleLogoutClick }) {
    return (
        <>
            <div className="navbar">
                <NavLink className='button' to='/'>Insta</NavLink>
                <input type='text' placeholder="Search" />
                <div className="mainButtons">
                    <NavLink className='button' to='/direct/inbox/'>Profile</NavLink>
                    <NavLink className='button' to='/explore/'>Explore</NavLink>
                    <NavLink className='button' to='/explore/'>Account</NavLink>
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>
            <div className="page">
                <Routes>
                    <Route path="/direct/inbox" element={<Index />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/" element={<Posts />} />
                </Routes>
            </div>
        </>
    )
}