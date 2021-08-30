import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogoHero from "./components/LogoHero/LogoHero";
import Home from "./components/Home";
import Region from "./components/Region";
import Footer from "./components/Footer/Footer";
//HEAD

import AboutUS from './components/About/AboutUs'


// import IndividualStories from "./components/IndividualStories/IndividualStories";
import Header from "./components/Header/Header";

import RegionalMap from "./components/RegionalMap/RegionalMap"

//*Structure for Region Page:
// <logoHero />
// navbar
// <RegionBanners />
// copy
// <YearlyInfo />
// <PhotoBubbles />
// <Footer />




function App(props) {


  return (
    <Router>
      <div className="App">
        <LogoHero />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/regionalmap' component={RegionalMap} />
          <Route path='/about-us' component={AboutUS} />

          {/* <Route path="/:regionName/:storyName" component={IndividualStories} /> */}
          <Route path="/:regionName" component={Region}>

          </Route>


          {/* <Route component={Error404} /> */}


          {/* note from myself to remember how to pass props to a component here. this is code from a work project */}
          {/* <Route path="/users" render={() => <UserManagement currentUser={this.state.currentUser} />} /> */}
=======





    </Switch>
      <Footer />
      </div>
    </Router >
  );
}

export default App;
