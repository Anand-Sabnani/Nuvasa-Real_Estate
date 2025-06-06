import List from "../../components/list/list.jsx"
import './profilePage.scss'
import Chat from '../../components/chat/chat.jsx'
import apiRequest from "../../lib/apiRequest.js"
import { useNavigate } from "react-router-dom"
import { useContext} from "react"
import { AuthContext } from "../../context/AuthContext.jsx"
import { Link } from "react-router-dom"
function ProfilePage(){
    const {updateUser,currentUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleLogout=async()=>{
        
        try{
           await apiRequest.post("/auth/logout")
            updateUser(null)
            navigate("/")
        }catch(err)
        {
            console.log(err)
        }
    }
    return(
        <div className="profilePage">
        <div className="details">
            <div className="wrapper">
            <div className="title">
                <h1>User Information</h1>
                <Link to="/profile/update">
                <button>Update Profile</button></Link>
            </div>
            <div className="info">
                <span>Avatar: <img src={currentUser.avatar||"/noavatar.jpg"} alt="" /></span>
                <span>UserName: <b>{currentUser.username}</b> </span>
                <span>E-mail: <b>{currentUser.email}</b> </span>
                <button className="but" onClick={handleLogout}>Logout</button>
            </div>
            <div className="title">
                <h1>My List</h1>
                <Link to='/add'>
                <button>Create New Post</button>
                </Link>
            </div>
            <List />
            <div className="title">
                <h1>Saved List</h1>
           </div>
           <List /> 
           </div>
        </div>
        <div className="chatContainer">
        <div className="wrapper">
            <Chat/>
            </div></div>
        </div>
    )
}
export default ProfilePage