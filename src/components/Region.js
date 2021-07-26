import RegionBanner from "./RegionBanners/RegionBanner";
// import YearlyInfo from "./YearlyInfo/YearlyInfo";
import Regions, { regions } from '../data/Regions'
import Error404 from "./Error404";
export default function Region(props) {
  console.log(props.match.params.regionName);
  let name = props.match.params.regionName;
  // the name comes through as the url, so we must name-ify it.
  const regionArray = regions.map((region) => {
    return region.region.toLowerCase()
  })
  console.log(regionArray)
  name = name.replace(/-/g, ' ');
  name = name.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  const getRegion = () => {

    let output = ""
    if (regionArray.indexOf(name.toLowerCase()) == -1) {
      output = <Error404 />

    }
    else {
      output =
        <div className="margins">
          <RegionBanner region={name} />
          i am a region.<br />
          specifically, the region known as {name}.
        </div>

    }
    return output


  }

  return (
    <div>
      <div className="margins">
        {getRegion()}
      </div>
      {/* <YearlyInfo regionName={name} /> */}
    </div>
  )
}