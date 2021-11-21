import './styles.css'
import BannerImg from './assets/BannerImg.png'
import coverImg from './assets/coverImg.png'

export const Banner = () => {

    return (
        <div className="mainBanner">
            <div className="bannerPic">
            <img src={BannerImg}  alt="bannerIMage"/>   
            </div>
            <div className="coverPic">
            <img src={coverImg} className="cover" alt="coverIMage"/>   
            </div>
            <div className="description">
            Lorem ipsum  dolo consectetur adipiscing elit. Maecenas at nisl vestibulum,
              </div>
            <div className="onTop">
                <ul className="workB">
                    <li>
                    <button className="butts"> play</button>
                    </li>
                  
                  <li>
                  <button className="butts">info</button>
                  </li>
                  </ul>
                </div>
                 
        </div>
    )
}