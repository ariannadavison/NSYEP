import RegionBanner from "./RegionBanners/RegionBanner";

export default function Region(props) {
  let name = props.match.params.regionName;
  name = name.replace(/-/g, " ");
  name = name.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

  let region = regions.filter((r) => r.region === name);
  let content = region[0].content;

  let images;

  const importImages = (r) => r.keys().map(r);

  switch (name) {
    case "Capital":
      images = importImages(
        require.context(`./Images/Capital`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Central":
      images = importImages(
        require.context(`./Images/Central`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Finger Lakes":
      images = importImages(
        require.context(`./Images/FingerLakes`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Long Island":
      images = importImages(
        require.context(`./Images/LongIsland`, false, /\.(png|jpe?g|svg)$/)
      );
    //   break;
    // case "Central":
    //   images = importImages(
    //     require.context(`./Images/Central`, false, /\.(png|jpe?g|svg)$/)
    //   );
    //   break;
    // case "Central":
    //   images = importImages(
    //     require.context(`./Images/Central`, false, /\.(png|jpe?g|svg)$/)
    //   );
    //   break;
    default:
      console.log("it's not doing what you think it's doing");
  }
  let file;
  const getRightImage = (imageName) => {
    //@imageName is gunna be c.image which will be only the file name without extensions
    file = images.find(
      (i) =>
        i.default
          .split("/")
          .pop()
          .replace(/\.[^/.]+$/, "")
          .replace(/\.[^/.]+$/, "") === imageName
    );
    return file ? file.default : null;
  };

  const useStyles = makeStyles({
    root: {
      width: "100%",
      maxWidth: 500,
    },
    headers: {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  });

  const styles = useStyles();


  return (
    <div>
      <RegionBanner region={name} />
      <div className="margins">
        i am a region.<br />
        specifically, the region known as {name}.
      </div>
      {/* <YearlyInfo regionName={name} /> */}
    </div>
  )
}