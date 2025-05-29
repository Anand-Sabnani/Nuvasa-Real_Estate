import './registerPage.scss'
import { Link,useNavigate   } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'
import apiRequest from '../../lib/apiRequest'
function Register(){
  const [error,setError]=useState("")
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()
   const handleSubmit= async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    setError("")
      const formData=new FormData(e.target);
      const username=formData.get("username")
      const email=formData.get("email")
      const password=formData.get("password")
      
    try{

      const res=await apiRequest.post("/auth/register",{
        username,email,password
      })
      navigate("/login")
    }catch(err){
      console.log(err)
      setError(err.response.data.message)
    }finally{
      setIsLoading(false)
    }
  }
    return(
        <div className='Register'>
           <div className="textContainer">
            <div className="wrapper">
              <div className="boxes">
                  <form onSubmit={handleSubmit}>
                 <div><h1 className='title'>Create an Account</h1></div>
                <div><input name="username" type="text" placeholder='Username'/></div>
                <div><input name='email' type="text" placeholder='Email'/></div>
                <div><input name='password' type="password" placeholder='Password'/></div>
               <div>
  {!isLoading ? (
    <input type="submit" value="Register" className="regbut" />
  ) : (
    <div className="loading-container">
      <div className="spinner" />
      <span className="loading-text">Creating your account...</span>
    </div>
  )}
</div>

                  <div className='error'> {error && <span>{error}</span>}</div>
                  <div className='tag'>
                    <Link to="/login">Do you have an account?</Link>
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
export default Register