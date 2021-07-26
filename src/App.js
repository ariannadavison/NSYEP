import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogoHero from "./components/LogoHero/LogoHero";
import Home from "./components/Home";
import Region from "./components/Region";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RegionalMapV2 from "./components/RegionalMap/RegionalMapV2"


function App() {
  return (
    <Router>
      <div className="App">
        <LogoHero />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/regional-map' component={RegionalMapV2} />
          <Route path="/:regionName" component={Region} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
