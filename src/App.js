import React from 'react';
import './App.css';

//*Structure for Region Page:
// <logoHero />
// navbar
// <RegionBanners />
// copy
// <YearlyInfo />
// <PhotoBubbles />
// <Footer />

//*Structure for Individual Story Page
// <logoHero />
// navbar
// media
// copy or interview (2019 - 2017)
// <Footer />

//*Structure for Contact Page
// <logoHero />
// navbar
// <MottoBanner />
// <Contact />
// <Form /> beyond mvp
// <Footer />



function App() {
  return (
    <div className="App">
      <LogoHero />
      {/* NavBar */}
      <MottoBanner />
      {/* COPY */}
      <PageDivider />
      {/* MAP */}
      <Footer />
    </div>
  );
}

export default App;
