

const Staff = () => {
    const staffMembers = [
        {
            name: "Megan Farry",
            title: "",
            image: "Megan Farry",
        },

        {
            name: "Jenine Loche",
            title: "",
            image: "Jenine Headshot",
        },

        {
            name: "Melinda Mack",
            title: "",
            image: "Melinda Mack",
        },

        {
            name: "Evelyn Ortiz",
            title: "",
            image: "Evelyn Ortiz",
        },

        {
            name: "Molly Tocin",
            title: "",
            image: "Molly Tocin",
        },
    ]
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
                    console.log()
                    return (

                        <div className="staffMember">
                            <div className="staffImage"><img src={src}></img></div>
                            <div className="staffName">{s.name}</div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default Staff