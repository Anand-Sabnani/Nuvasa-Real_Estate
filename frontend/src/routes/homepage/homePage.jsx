import './homePage.scss';
// @ts-ignore
import SearchBar from '../../components/searchbar/searchBar';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
function HomePage(){
  const{currentUser}=useContext(AuthContext)
  console.log(currentUser)
    return (
        <div className='homePage'>
            <div className="textContainer">
            <div className="wrapper">
              
                <h1 className='title'>
                Whether You are Moving In or Moving Up, Your New Address Starts Here.
                </h1>
                <p className="description">
                Nuvasa: Whether you’re looking to rent or buy, Nuvasa offers the perfect home for every lifestyle. With modern design, exceptional convenience, and a thriving community, it’s more than just a place to live — it’s where your next chapter begins. Discover your ideal space today.
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                  <h1>16+</h1>
                  <h2>Years Of Experience</h2>
                    </div>
                    
                    <div className="box">
                  <h1>200</h1>
                  <h2>Awards Gained</h2>
                    </div>
                    
                    <div className="box">
                  <h1>1200+</h1>
                  <h2>Properties Ready</h2>
                    </div>
                </div>
            </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}
export default HomePage