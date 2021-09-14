import './AboutUs.css'
import { what } from '../../data/About.js'
const What = () => {
    return (<div className="about__section">
        <h2 className="about__header">What We do</h2>
        <div className="about__header-bg"></div>
        <div className="about__subHeaders">
            <span className="about__subHead">
                <h5 className="about__subHeader__text">Voice</h5>
                <p className="about__text">
                    {what[0].voice}
                </p>
            </span>
            <span className="about__subHead">
                <h5 className="about__subHeader__text">Knowledge</h5>
                <p className="about__text">{what[0].knowledge}

                </p>
            </span>
            <span className="about__subHead">
                <h5 className="about__subHeader__text">Progress</h5>

                <p className="about__text">
                    {what[0].progress}
                </p>
            </span>
        </div>
    </div>

    )
}

export default What
//change