import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogoHero from "./components/LogoHero/LogoHero";
import Home from "./components/Home";
import Region from "./components/Region";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import IndividualStories from "./components/IndividualStories/IndividualStories";
import Header from "./components/Header/Header";

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
    <Router>
      <div className="App">
        <LogoHero />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          {/* fun react-router knowledge fact: this long path has to go first because its path is more precise */}
          <Route path="/:regionName/:storyName" component={IndividualStories} />
          <Route path="/:regionName" component={Region} />

          {/* note from myself to remember how to pass props to a component here. this is code from a work project */}
          {/* <Route path="/users" render={() => <UserManagement currentUser={this.state.currentUser} />} /> */}
        </Switch>
        <Footer />
        {/* <IndividualStories /> */}
      </div>
    </Router>
  );
}

export default App;
