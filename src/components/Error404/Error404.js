
import { withRouter } from "react-router"
const Error404 = (props) => {
    return (
        <div>

            error 404
            <div>{props.match.params.regionName} is not a region</div>
        </div>
    )
}
export default withRouter(Error404)