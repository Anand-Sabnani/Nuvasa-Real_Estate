import './listPage.scss'
import { listData } from '../../lib/dummydata'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/card'
import Map from '../../components/map/map'
import 'leaflet/dist/leaflet.css';

const data=listData

function ListPage(){
    return(
        <div className="listPage">
            <div className="listcontainer">
                <div className="wrapper">
                    <Filter/>
                    {data.map(item=>(
                        <Card key={item.id} item={item}/>
                    ))}
                    </div>List</div>
            <div className="mapcontainer"> 
                <Map items={data}/>
            </div>
           
            
            </div>
    )
}
export default ListPage