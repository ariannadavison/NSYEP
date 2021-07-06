import MottoBanner from "./MottoBanner/MottoBanner";
import IntroParagraph from "./IntroParagraph/IntroParagraph";
import PageDivider from "./PageDivider/PageDivider";
import RegionalMap from "./RegionalMap/RegionalMap";

export default function Home() {
  return (
    <div>
      <MottoBanner />
      <IntroParagraph />
      <PageDivider />
      <RegionalMap />
    </div>
  );
}
