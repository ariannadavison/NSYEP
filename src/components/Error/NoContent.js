import { withRouter } from "react-router"
import './NoContent.css'
const NoContent = (props) => {
    console.log(props.match)
    let name = props.match.params.regionName.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    console.log(name.match(/-*/))
    return (
        <div className='errorMessage'>
            {name} Updates Coming Soon!
        </div>
    )
}

export default withRouter(NoContent)