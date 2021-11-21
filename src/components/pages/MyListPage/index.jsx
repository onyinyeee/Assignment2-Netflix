import './styles.css'
import { Shelf } from '../../Shelf';


const MyListPage = ()=>{
    return (
        <div className="shoes">
            <h2> my List</h2>
            <Shelf/>
            <Shelf/>
            <Shelf/>
            <Shelf/>
        </div>
    )
 }
 
 export default MyListPage;