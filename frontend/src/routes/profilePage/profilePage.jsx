import List from "../../components/list/list.jsx"
import './profilePage.scss'
import Chat from '../../components/chat/chat.jsx'
function ProfilePage(){
    return(
        <div className="profilePage">
        <div className="details">
            <div className="wrapper">
            <div className="title">
                <h1>User Information</h1>
                <button>Update Profile</button>
            </div>
            <div className="info">
                <span>Avatar: <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></span>
                <span>UserName: <b>John Doe</b> </span>
                <span>E-mail: <b>jd@gmail.com</b> </span>
            </div>
            <div className="title">
                <h1>My List</h1>
                <button>Create New Post</button>
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