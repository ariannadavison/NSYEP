import MottoBanner from "./MottoBanner/MottoBanner";
import IntroParagraph from "./IntroParagraph/IntroParagraph";
import WhatIs from './WhatIs/WhatIs';
import WhySYEP from './WhySYEP/WhySYEP';
import Impact from './Impact/Impact';

export default function Home() {
  return (
    <div>
      <MottoBanner />
      <IntroParagraph />
      <WhatIs />
      <WhySYEP />
      <Impact />
    </div>
  );
}
