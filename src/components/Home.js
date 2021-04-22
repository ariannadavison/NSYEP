import MottoBanner from './MottoBanner/MottoBanner';
import PageDivider from './PageDivider/PageDivider';
import RegionalMap from './RegionalMap/RegionalMap';

export default function Home() {
  return (
    <div>
    <MottoBanner />
    {/* COPY */}
    <PageDivider />
    <RegionalMap />
  </div>
  )
}