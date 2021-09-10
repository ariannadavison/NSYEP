
import { staffMembers } from '../../data/About.js'
const Staff = () => {

    console.log(staffMembers)
    var length = staffMembers.length
    const importImages = (r) => r.keys().map(r);
    var images = importImages(require.context(`./StaffImages/`, false, /\.(png|jpe?g|svg)$/))
    const getImageFile = (x) => {
        return (
            images.filter((v) => {

                return v.default.toString().match(x)
            })
        )
    }

    return (


        <div className="about__section">


            <h2 className="about__header">Our Staff</h2>
            <div className="about__header-bg"></div>
            <div className="staffContainer">

                {staffMembers.map((s, key) => {
                    var src = getImageFile(s.image)[0].default

                    return (

                        <div className="staffMember">
                            <div className="staffImage"><img src={src}></img></div>
                            <div className="staffName">{s.name}</div>
                            <div className="staffName">{s.title}</div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default Staff