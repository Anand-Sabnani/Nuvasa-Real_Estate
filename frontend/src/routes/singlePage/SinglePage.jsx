import './singlePage.scss'
import Slider from '../../components/slider/slider'
import { singlePostData } from '../../lib/dummydata'
import { userData } from '../../lib/dummydata'
import  Map  from '../../components/map/map'
import DOMPurify from 'dompurify'
import { useLoaderData } from 'react-router-dom'
function SinglePage()
{
    const post=useLoaderData() 
    console.log(post)
    return(
        <div className='singlePage'>
            <div className="details">
                <div className="wrapper">
                <Slider images={post.images}/>
                <div className="info">
                    <div className="top">
                        <div className="post">
                              <h1>{post.title}</h1>
                              <div className="address">
                                <img src="/pin.png" alt="" />
                                <span>{post.address}</span>
                              </div>
                              <div className="price">$ {post.price}</div>
                        </div>
                        <div className="user">
                            <img src={post.user.avatar} alt="" />
                            <span>{post.user.username}</span>
                        </div>
                    </div>
                    <div className="bottom" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.postDetail.desc)}}>
                       
                    </div>
                </div>
                </div>
            </div>
             <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listvertical">
                        <div className="feature">
                            <img src="/utility.png" alt="" />
                            <div className="featureText">
                                <span>Utilities</span>
                                {
                                    post.postDetail.utilities === "owner" ?
                                    <p>Owner is Responsible</p>:
                                    <p>Tenant is Responsible</p>
                                }
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                {
                                    post.postDetail.pet === "allowed" ?
                                    <p>Pets Allowed</p>:
                                    <p>Pets not allowed </p>
                                }
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" alt="" />
                            <div className="featureText">
                                <span>Income Policy : </span>
                                 {post.postDetail.income}
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes
                    </p>
                    <div className="sizes">
                    <div className="size">
                         <img src="/size.png" alt="" />
                            <span>{post.postDetail.size}</span>
                    </div>
                    <div className="size">
                         <img src="/bed.png" alt="" />
                         <span>{post.bedroom} beds</span>
                    </div>
                    <div className="size">
                         <img src="/bath.png" alt="" />
                         <span>{post.bathroom} bathroom</span>
                    </div>
                    </div>
                    <p className="title">Nearby Places
                    </p>
                    <div className="listHorizontal">

                        <div className="feature">
                            <img src="/school.png" alt="" />
                            <div className="featureText">
                                <span>School</span>
                                <p>{post.postDetail.school>999 ? post.postDetail.school/1000 +" km" :post.postDetail.school + " m"} away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>{post.postDetail.bus} m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/school.png" alt="" />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>200 m away</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                    <Map items={[post]}/>
                        </div>
                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="" />
                            Send a message
                        </button>
                        <button>
                            <img src="/save.png" alt="" />
                            Save the place
                        </button>
                    </div>
                        </div>
             </div>
        </div>
    )
}
export default SinglePage