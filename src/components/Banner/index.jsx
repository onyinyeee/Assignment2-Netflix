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
            <img src={coverImg}  alt="coverIMage"/>   
            </div>
            <div className="onTop">
                  <button className="butts"> play</button>
                  <button className="butts">info</button>
                </div>

            

            

        </div>
    )
}