import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/home"
import Aircore from "./pages/aircore"
import DSClientServer from "./pages/dsClientServer"
import IDS from "./pages/ids"
import Korus from "./pages/korus"
import ProductBuilder from "./pages/productBuilder"
import RemoteVehicleSetup from "./pages/remoteVehicleSetup"
import SmartProxy from "./pages/smartProxy"
import ToweOfhanoi from "./pages/toweOfhanoi"
import UTAVendingApp from "./pages/utaVendingApp"
import WDMPortfolio from "./pages/wdmPortfolio"
import data from "./data/data.json"
import Footer from "./components/footer/footer"

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/my_site/" exact
              render={props => (
                <Home
                  {...props}
                  name={data} />
              )} />
            <Route path="/rvs"
              render={props => (
                <RemoteVehicleSetup
                  {...props}
                  name={data.Projects.rvs} />
              )} />
            <Route path="/pb"
              render={props => (
                <ProductBuilder
                  {...props}
                  name={data.Projects.pb} />
              )} />
            <Route path="/sp"
              render={props => (
                <SmartProxy
                  {...props}
                  name={data.Projects.sp} />
              )} />
            <Route path="/korus"
              render={props => (
                <Korus
                  {...props}
                  name={data.Projects.korus} />
              )} />
            <Route path="/aircore"
              render={props => (
                <Aircore
                  {...props}
                  name={data.Projects.aircore} />
              )} />
            <Route path="/ds"
              render={props => (
                <DSClientServer
                  {...props}
                  name={data.Projects.ds} />
              )} />
            <Route path="/vendingMachine"
              render={props => (
                <UTAVendingApp
                  {...props}
                  name={data.Projects.vendingMachine} />
              )} />
            <Route path="/portfolio"
              render={props => (
                <WDMPortfolio
                  {...props}
                  name={data.Projects.portfolio} />
              )} />
            <Route path="/ids"
              render={props => (
                <IDS
                  {...props}
                  name={data.Projects.ids} />
              )} />
            <Route path="/toh"
              render={props => (
                <ToweOfhanoi
                  {...props}
                  name={data.Projects.toh} />
              )} />

          </Switch>
        </div>
      </Router>
      <Footer name={data.Footer} />
    </>
  );
}

export default App;
