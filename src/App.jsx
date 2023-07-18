import "./App.css";
import AppTransparentBG from "./components/app/appTransparentBG";
import DropDown from "./components/app/dropDown";
import { SIZES } from "./constant";
import Intro from "./components/app/intro";
import Tabs from "./components/app/Tabs";
import Graph from "./components/app/graph";
import Transact from "./components/app/transact";
import Navigation from "./components/app/nav";
import Footer from "./components/app/footer";

const App = () => {
  return (
    <>
      {/* visible on initial app load */}
      <div style={styles.container}>
        <Navigation />
        <Intro />
        <Tabs />
        <Graph />
        <Transact />
        <Footer />
      </div>

      {/* visible when menu icon is clicked */}
      <AppTransparentBG />

      <DropDown />
    </>
  );
};

const styles = {
  container: {
    position: "relative",
    width: `${SIZES.xSmall * 10}%`,
    height: `${SIZES.xSmall * 10}vh`,
  },
};

export default App;
