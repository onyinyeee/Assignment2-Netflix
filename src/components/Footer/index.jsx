import "./styles.css";
import Instagram from'./assets/Instagram.png'
import youtube from './assets/youtube.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'

export const Footer = () => {

    return (
        <div className="Footer">
             <ul className="navbarOne">
                <li>
                <div className="socialIcons">
                <img src={facebook} />
                </div>
                </li>
                <li>
                <div className="socialIcons">
                <img src={Instagram} />
                </div>
                </li>

                <li>
                <div className="socialIcons">
                <img src={twitter}/>
                </div>
                </li>

                <li>
                <div className="socialIcons">
                <img src={youtube} />
                </div>
                </li>
            </ul>
            

            <div className="linkList">
                <div className="linktext">
                    Audio and subtitles
                </div>

                <div className="linktext">
                    Audio Description
                </div>

                <div className="linktext">
                    Help Center
                </div>

                <div className="linktext">
                    GiftCards
                </div>

                <div className="linktext">
                    Media Center
                </div>

                <div className="linktext">
                    Investor Relations
                </div>

                <div className="linktext">
                    Jobs
                </div>

                <div className="linktext">
                    Terms of Use
                </div>

                <div className="linktext">
                    Privacy
                </div>

                <div className="linktext">
                    Legal Notices
                </div>

                <div className="linktext">
                    Cookie Preferences
                </div>

                <div className="linktext">
                    Impressum
                </div>

                <div className="linktext">
                    Contact Us
                </div>
            </div>

            <div className="serviceCode"> Service Code</div>
            <div className="copyright">© 1997-2021 Netflix, Inc. 3460690e-5218-47f8-8b64-d9a764ee5bcd</div>
        </div>
       
    )
};

