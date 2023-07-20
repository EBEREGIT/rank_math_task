import { COLORS, SIZES } from "../../../constant";
import Background from "../../elements/Card/background";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";

const Intro = () => {
  return (
    <main style={styles.container} className="shadow">
      <Background
        content={
          <>
            <Header />
            <Body />
            <Footer />
          </>
        }
      />
    </main>
  );
};

const styles = {
  container: {
    marginLeft: SIZES.large + 10,
    marginRight: SIZES.large + 10,
    marginTop: SIZES.large + 5,
    marginBottom: SIZES.large + 5,
    paddingTop: SIZES.large + 5,
    paddingRight: SIZES.large + 5,
    paddingBottom: SIZES.xxSmall,
    paddingLeft: SIZES.xxSmall,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
  },
};

export default Intro;
