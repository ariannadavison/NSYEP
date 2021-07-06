import RegionBanner from "./RegionBanners/RegionBanner";
import { regions } from "../data/Regions";
// import YearlyInfo from "./YearlyInfo/YearlyInfo";

export default function Region(props) {
  console.log(props.match.params.regionName);
  let name = props.match.params.regionName;
  // the name comes through as the url, so we must name-ify it.
  name = name.replace(/-/g, " ");
  name = name.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  console.log(name, "name");
  //gotta locate the right object that's holding the region name:

  let region = regions.filter((r) => r.region === name);
  let content = region[0].content;
  console.log(content, "filtered region");

  console.log("Does name === Capital", name === "Capital");

  let images;

  const importImages = (r) => r.keys().map(r);

  switch (name) {
    case "Capital":
      images = importImages(
        require.context(`./Images/Capital`, false, /\.(png|jpe?g|svg)$/)
      );
      console.log(images, "images");
      break;
    // case "Finger Lakes":
    //       images = importImages(
    //         require.context(
    //           `../Images/FingerLakes/2020`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //   break;
    // case "Central":
    //   switch (year) {
    //     case "2020":
    //       images = importImages(
    //         require.context(
    //           `../Images/Central/2020`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2019":
    //       images = importImages(
    //         require.context(
    //           `../Images/Central/2019`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2018":
    //       images = importImages(
    //         require.context(
    //           `../Images/Central/2018`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     default:
    //       console.log("The year's haven't been seen.");
    //   }
    //   break;
    // case "Southern":
    //   switch (year) {
    //     case "2020":
    //       images = importImages(
    //         require.context(
    //           `../Images/Southern/2020`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2019":
    //       images = importImages(
    //         require.context(
    //           `../Images/Southern/2019`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2018":
    //       images = importImages(
    //         require.context(
    //           `../Images/Southern/2018`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     default:
    //       console.log("The year's haven't been seen.");
    //   }
    //   break;
    // case "North":
    //   switch (year) {
    //     case "2020":
    //       images = importImages(
    //         require.context(`../Images/North/2020`, false, /\.(png|jpe?g|svg)$/)
    //       );
    //       break;
    //     case "2019":
    //       images = importImages(
    //         require.context(`../Images/North/2019`, false, /\.(png|jpe?g|svg)$/)
    //       );
    //       break;
    //     case "2018":
    //       images = importImages(
    //         require.context(`../Images/North/2018`, false, /\.(png|jpe?g|svg)$/)
    //       );
    //       break;
    //     default:
    //       console.log("The year's haven't been seen.");
    //   }
    //   break;
    // case "Mohawk Valley":
    //   switch (year) {
    //     case "2020":
    //       images = importImages(
    //         require.context(
    //           `../Images/MohawkValley/2020`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2019":
    //       images = importImages(
    //         require.context(
    //           `../Images/MohawkValley/2019`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2018":
    //       images = importImages(
    //         require.context(
    //           `../Images/MohawkValley/2018`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     default:
    //       console.log("The year's haven't been seen.");
    //   }
    //   break;
    // case "Hudson Valley":
    //   switch (year) {
    //     case "2020":
    //       images = importImages(
    //         require.context(
    //           `../Images/HudsonValley/2020`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2019":
    //       images = importImages(
    //         require.context(
    //           `../Images/HudsonValley/2019`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2018":
    //       images = importImages(
    //         require.context(
    //           `../Images/HudsonValley/2018`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     default:
    //       console.log("The year's haven't been seen.");
    //   }
    //   break;
    // case "New York City":
    //   switch (year) {
    //     case "2020":
    //       images = importImages(
    //         require.context(
    //           `../Images/NewYorkCity/2020`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2019":
    //       images = importImages(
    //         require.context(
    //           `../Images/NewYorkCity/2019`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2018":
    //       images = importImages(
    //         require.context(
    //           `../Images/NewYorkCity/2018`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     default:
    //       console.log("The year's haven't been seen.");
    //   }
    //   break;
    // case "Long Island":
    //   switch (year) {
    //     case "2020":
    //       images = importImages(
    //         require.context(
    //           `../Images/LongIsland/2020`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2019":
    //       images = importImages(
    //         require.context(
    //           `../Images/LongIsland/2019`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2018":
    //       images = importImages(
    //         require.context(
    //           `../Images/LongIsland/2018`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     default:
    //       console.log("The year's haven't been seen.");
    //   }
    //   break;
    // case "Western":
    //   switch (year) {
    //     case "2020":
    //       images = importImages(
    //         require.context(
    //           `../Images/Western/2020`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2019":
    //       images = importImages(
    //         require.context(
    //           `../Images/Western/2019`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     case "2018":
    //       images = importImages(
    //         require.context(
    //           `../Images/Western/2018`,
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )
    //       );
    //       break;
    //     default:
    //       console.log("The year's haven't been seen.");
    //   }
    //   break;
    default:
      console.log("it's not doing what you think it's doing");
  }

  return (
    <div>
      <RegionBanner region={name} />
      <div className="margins">
        i am a region.
        <br />
        specifically, the region known as {name}.
      </div>
      <div className="region__content">
        {/* probably will be a map as according to the number of things to put into the page */}
        {content.map((c, key) => {
          //cylce thru names of images to check if it matches our wanted img
          // let image = images[c.image].default;
          return (
            <div key={key}>
              {c.title}
              {/* <img src={require(image)} /> */}
              {c.copy}
            </div>
          );
        })}
      </div>
      {/* <YearlyInfo regionName={name} /> */}
    </div>
  );
}
