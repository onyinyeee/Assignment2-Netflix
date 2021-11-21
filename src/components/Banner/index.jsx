import './styles.css'
import BannerImg from './assets/BannerImg.png'

export const Banner = () => {

    return (
        <div className="mainBanner">
            <div className="bannerPic">
            <img src={BannerImg}  alt="bannerIMage"/>   
            </div>
            <div className="onTop">
                  <button className="butts"> play</button>
                  <button className="butts">info</button>
                </div>

            

        </div>
    )
}