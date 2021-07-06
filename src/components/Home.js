import MottoBanner from "./MottoBanner/MottoBanner";
import IntroParagraph from "./IntroParagraph/IntroParagraph";
import WhatIs from './WhatIs/WhatIs';

export default function Home() {
  return (
    <div>
      <MottoBanner />
      <IntroParagraph />
      <WhatIs />
    </div>
  );
}
