import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./index.js";
import Explore from "./explore";
import Posts from "./posts.js";

function handleClick(e){
    debugger;    
}
export default function HomePage() {    
    return (
        <>
            <div className="navbar">
                <div>Instagram</div>
                <input type='text' placeholder="Search" />
                <div className="mainButtons">
                    <NavLink className='button' to='/'>Home</NavLink><br />
                    <NavLink className='button' to='/direct/inbox/'>Profile</NavLink><br />
                    <NavLink className='button' to='/explore/'>Explore</NavLink><br />
                    <NavLink className='button' to='/explore/'>Account</NavLink><br />
                    <button onClick={(e)=>handleClick(e)}>Delete</button>
                </div>
            </div>
            <Routes>
                <Route path="/direct/inbox" element={<Index />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/" element={<Posts />} />
            </Routes>
        </>
    )
}