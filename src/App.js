import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogoHero from "./components/LogoHero/LogoHero";
import Home from "./components/Home";
import Region from "./components/Region";
import Footer from "./components/Footer/Footer";
//HEAD
import Error404 from './components/Error404'
// import IndividualStories from "./components/IndividualStories/IndividualStories";
import Header from "./components/Header/Header";
import MapV2 from './components/MapV2/MapV2';
import RegionalMapV2 from "./components/RegionalMap/RegionalMapV2"
import RegionalMap from "./components/RegionalMap/RegionalMap";
//*Structure for Region Page:
// <logoHero />
// navbar
// <RegionBanners />
// copy
// <YearlyInfo />
// <PhotoBubbles />
// <Footer />




function App() {
  return (
    <Router>
      <div className="App">
        <LogoHero />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/regionalmap' component={RegionalMapV2} />

          {/* <Route path="/:regionName/:storyName" component={IndividualStories} /> */}
          <Route path="/:regionName" exact component={Region} />

          {/* note from myself to remember how to pass props to a component here. this is code from a work project */}
          {/* <Route path="/users" render={() => <UserManagement currentUser={this.state.currentUser} />} /> */}
          <Route component={Error404} />
=======
          <Route path="/:regionName" component={Region} />

        </Switch>
      <Footer />
      </div>
    </Router >
  );
}

export default App;
