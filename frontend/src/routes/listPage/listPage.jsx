import './listPage.scss'
import { listData } from '../../lib/dummydata'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/card'
import Map from '../../components/map/map'
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router-dom'



function ListPage(){
    const posts=useLoaderData()
    return(
        <div className="listPage">
            <div className="listcontainer">
                <div className="wrapper">
                    <Filter/>
                    {posts.map(item=>(
                        <Card key={item.id} item={item}/>
                    ))}
                    </div>List</div>
            <div className="mapcontainer"> 
                <Map items={posts}/>
            </div>
           
            
            </div>
    )
}
export default ListPage