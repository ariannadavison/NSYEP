import MottoBanner from './MottoBanner/MottoBanner';
import Paragraph from './Paragraph/Paragraph';
import PageDivider from './PageDivider/PageDivider';
import RegionalMap from './RegionalMap/RegionalMap';

export default function Home() {
  return (
    <div>
    <MottoBanner />
    {/* COPY */}
    <Paragraph />
    <PageDivider />
    <RegionalMap />
  </div>
  )
}