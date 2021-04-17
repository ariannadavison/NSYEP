import React from 'react';
import LogoHero from './components/LogoHero/LogoHero';
import MottoBanner from './components/MottoBanner/MottoBanner';
import PageDivider from './components/PageDivider/PageDivider';
import Footer from './components/footer/Footer';
import Navbar from './components/NavBar/Navbar';
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
      <Navbar />
      <MottoBanner />
      {/* COPY */}
      <PageDivider />
      {/* MAP */}
      <Footer />
    </div>
  );
}

export default App;
