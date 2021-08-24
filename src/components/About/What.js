import './AboutUs.css'

const What = () => {
    return (<div className="about__section">
        <h2 className="about__header">What We do</h2>
        <div className="about__header-bg"></div>
        <div className="about__subHeaders">
            <span className="about__subHead">
                <h5 className="about__subHeader__text">Voice</h5>
                <p className="about__text">
                    NYATEP provides a voice to the workforce development community by
                    advocating for systems change that will foster and promote
                    economic mobility at the federal, state, and local policy levels.
                </p>
            </span>
            <span className="about__subHead">
                <h5 className="about__subHeader__text">Knowledge</h5>
                <p className="about__text">
                    NYATEP increases the knowledge-base and efficacy of the workforce
                    system by providing best-in-class training to create opportunities
                    for advancement and exposure to evidence based practices that will
                    strengthen and enhance the delivery of services.
                </p>
            </span>
            <span className="about__subHead">
                <h5 className="about__subHeader__text">Progress</h5>

                <p className="about__text">
                    NYATEP promotes progress to continuously improve the sstate's
                    systems and local practice by providing cutting-edge research and
                    piloting initiatives so it is ahead of the curve in providing
                    workforce services.{" "}
                </p>
            </span>
        </div>
    </div>

    )
}

export default What