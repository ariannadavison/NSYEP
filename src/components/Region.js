import PhotoBubbles from "./PhotoBubbles/PhotoBubbles";
import RegionBanner from "./RegionBanners/RegionBanner";
// import YearlyBanner from "./RegionBanners/RegionBanner";
export default function Region (props) {
  console.log(props.match.params.regionName);
  let name = props.match.params.regionName;
  // the name comes through as the url, so we must name-ify it.
  name = name.replace(/-/g,' ');
  name = name.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

  return (
    <div>
      <RegionBanner region={name}/>
      i am a region.<br />
      specifically, the region known as {name}.
      {/* <YearlyBanner /> */}
      <PhotoBubbles />
    </div>
  )
}