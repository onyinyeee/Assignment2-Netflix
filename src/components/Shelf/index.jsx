import './styles.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img12 from './assets/img12.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import img11 from './assets/img11.jpg'
import img10 from './assets/img10.jpg'


export const Shelf = () => {

    return (
        <div classname="Shelf"> 
            <ul className="titleList">

                <li>
                    <div className="tiles">
                    <img src={img1} className="imgs"/>
                    </div>
                </li>

                <li>
                    <div className="tiles">
                    <img src={img2} className="imgs" />
                    </div>
                </li>

                <li>
                    <div className="tiles">
                    <img src={img3} className="imgs"/>
                    </div>
                </li>

                <li>
                    <div className="tiles">
                    <img src={img12} className="imgs"/>
                    </div>
                </li>

                <li>
                    <div className="tiles">
                    <img src={img5} className="imgs"/>
                    </div>
                </li>

                
            </ul>
       
    
        </div>
    )
}