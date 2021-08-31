import { approach } from '../../data/About.js'
import './AboutUs.css'
const Approach = () => {
    return (

        <div className="about__section">
            <h2 className="about__header">Our Approach</h2>
            <div className="about__header-bg"></div>
            <div className="about__subHeaders">
                <span className="about__subHead">
                    <h5 className="about__subHeader__text">Voice</h5>
                    <p className="about__text">
                        {
                            approach[0].voice.map((x) => {
                                return (
                                    <li>{x}</li>
                                )
                            })
                        }</p>
                </span>
                <span className="about__subHead">
                    <h5 className="about__subHeader__text">Knowledge</h5>
                    <p className="about__text">
                        {
                            approach[0].knowledge.map((x) => {
                                return (
                                    <li>{x}</li>
                                )
                            })
                        }
                    </p>
                </span>
                <span className="about__subHead">
                    <h5 className="about__subHeader__text">Progress</h5>

                    <p className="about__text">
                        {
                            approach[0].progress.map((x) => {
                                return (
                                    <li>{x}</li>
                                )
                            })
                        }


                    </p>
                </span>
            </div>
        </div>
    )
}
export default Approach