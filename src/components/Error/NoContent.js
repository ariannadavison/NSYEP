import { withRouter } from "react-router";
import "./NoContent.css";
const NoContent = (props) => {
  let name = props.match.params.regionName.replace(/(^\w|\s\w)/g, (m) =>
    m.toUpperCase()
  );
  var index = name.indexOf("-");
  var formatName = name
    .replace(name[index + 1], name[index + 1].toUpperCase())
    .replace("-", " ");
  return <div className="errorMessage">{formatName} Updates Coming Soon!</div>;
};

export default withRouter(NoContent);
