import './styles.css'
import { Banner } from '../../Banner';
import { Shelf } from '../../Shelf';


const MyHomePage = ()=>{
    return (
        <div className="shoes">
            <Banner/>
            <h3> My List </h3>
            <Shelf/>
            <h3> Trending Now</h3>
            <Shelf/>
            <h3> Popular on Netflix</h3>
            <Shelf/>
        </div>
    )
 }
 
 export default MyHomePage;