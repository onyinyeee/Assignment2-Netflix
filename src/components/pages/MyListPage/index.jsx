import './styles.css'
import { Shelf } from '../../Shelf';


const MyListPage = ()=>{
    return (
        <div className="shoes">
            <h2> my List</h2>
            <Shelf/>
            <h2> Trending Now</h2>
            <Shelf/>
        </div>
    )
 }
 
 export default MyListPage;