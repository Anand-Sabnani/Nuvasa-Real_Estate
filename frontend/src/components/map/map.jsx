import Pin from '../pin/pin'
import './map.scss'
import { MapContainer , TileLayer } from 'react-leaflet'
function Map({items}){
    return(     
  <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   {items.map(item=>(
    <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>


     
    )
}
export default Map