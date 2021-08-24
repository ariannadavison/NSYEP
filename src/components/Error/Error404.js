
import { withRouter } from "react-router"
import './Error404.css'
const Error404 = (props) => {
    console.log(props.match)
    let errorMessage = props.match.params.regionName.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    return (
        <div className='error'>

            <div className='error404'>

                404  Error
            </div>

            <div className='errorMessage'>Page Not Found: &#160;<i>/{errorMessage.toLowerCase().replace("-", " ")}</i></div>

        </div>
    )
}
export default withRouter(Error404)