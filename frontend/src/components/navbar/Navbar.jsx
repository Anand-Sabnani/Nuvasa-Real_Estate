import "./navbar.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNotificationStore } from "../../lib/notificationStore"
function Navbar(){
    const [open,setOpen]=useState(false)
    const {currentUser}=useContext(AuthContext)
     const fetch=useNotificationStore((state)=>state.fetch)
      const number = useNotificationStore((state) => state.number);
 fetch();
    return (
        <nav>
        <div className="left">
           <Link to={`/`} className="logo">
            <img src="/logo.png" alt="" />
            <span>Nuvasa</span>
            </Link>
            <Link to={`/`}>Home</Link>
            <Link to={`/`}>About</Link>
            <Link to={`/`}>Contact</Link>
            <Link to={`/`}>Agents</Link>
            </div>
        <div className="right">
       {currentUser?(
        <div className="user">
          <img src={currentUser.avatar || "/noavatar.jpg"} />
          <span>{currentUser.username}</span>
          <Link to="/profile" className="profile">
            {number>0&&<div className="notification">{number}</div>} 
           <span>Profile</span>
          </Link>
        </div>): (<><Link to={`/login`}>Sign In</Link>
        <Link to={`/register`} className="register">Sign Up</Link></>)}
        <div className="menuIcon">
             <img src="/menu.png" alt="" onClick={()=>setOpen(prev=>!prev)}/>
            </div>
            <div className={open? "menu active":"menu"}>
            <Link to={`/`}>Home</Link>
            <Link to={`/`}>About</Link>
            <Link to={`/`}>Contact</Link>
            <Link to={`/`}>Agents</Link>
            <Link to={`/`}>Sign In</Link>
            <Link to={`/`}>Sign Up</Link>
            </div>
            </div></nav>
    )
}
export default Navbar