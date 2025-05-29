import './login.scss'
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'
import apiRequest from '../../lib/apiRequest'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
function Login(){
    const [error,setError]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    const {updateUser}=useContext(AuthContext)
  const navigate=useNavigate()
   const handleSubmit= async(e)=>{
    e.preventDefault()
    setError("")
    setIsLoading(true)
      const formData=new FormData(e.target);
      const username=formData.get("username")
      const password=formData.get("password")
      
    try{
      const res=await apiRequest.post("/auth/login",{
        username,password
      })
      updateUser(res.data)
      console.log("User context updated")
       navigate("/")
       console.log("Navigated to homepage");
    }catch(err){
      setError(err.response.data.message)
    }finally{
      setIsLoading(false)
    }
  }

    return(
        <div className="login">
            <div className="textContainer">
            <div className="wrapper">
              <div className="boxes">
                  <form onSubmit={handleSubmit}>
                 <div><h1 className='title'>Welcome Back!</h1></div>
                <div><input name='username' required minLength={3} maxLength={20} type="text" placeholder='Username'/></div>
                <div><input name='password' required minLength={8}  type="password" placeholder='Password'/></div>
                <div>
  {!isLoading ? (
    <input type="submit" value="Login" className="regbut" />
  ) : (
    <div className="loading-container">
      <div className="spinner" />
      <span className="loading-text">Logging you in...</span>
    </div>
  )}
</div>


                <div className='error'>{error && <span>{error}</span>}</div>
                  <div className='tag'>
                    <Link to="/register">Do you not have an account?</Link>
                  </div>
                 </form>
              </div>
            </div>
            </div>
           <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}
export default Login 