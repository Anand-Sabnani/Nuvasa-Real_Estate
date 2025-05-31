import './listPage.scss'
import { listData } from '../../lib/dummydata'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/card'
import Map from '../../components/map/map'
import 'leaflet/dist/leaflet.css';
import { Await, useLoaderData } from 'react-router-dom'
import { Suspense } from 'react'



function ListPage(){
    const data=useLoaderData()
    return(
        <div className="listPage">
            <div className="listcontainer">
                <div className="wrapper">
                    <Filter/>
                   <Suspense fallback={<p>Loading...</p>}>
                    <Await
          resolve={data.postResponse}
          errorElement={
            <p>Error loading package location!</p>
          }
        >
          {(postResponse) => (
            postResponse.data.map(post=>(
                <Card key={post.id} item={post}/>
            ))
          )}
        </Await>
                   </Suspense>
                    </div>List</div>
            <div className="mapcontainer"> 
                {/* <Map items={posts}/> */
                <Suspense fallback={<p>Loading...</p>}>
                    <Await
          resolve={data.postResponse}
          errorElement={
            <p>Error loading package location!</p>
          }
        >
          {(postResponse) => (
            <Map items={postResponse.data} />
          )}
        </Await>
                   </Suspense>
                }
            </div>
            </div>
    )
}
export default ListPage