import './list.scss'
import Card from "../../components/card/card"
function List({posts}){
    return (
        <div className="list">
           {posts.map(item=>(
           <Card key={item.id} item={item}/>
           ))}
        </div>
    )
}
export default List