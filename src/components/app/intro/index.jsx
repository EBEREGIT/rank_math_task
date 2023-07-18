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
    margin: SIZES.large,
    paddingTop: SIZES.large,
    paddingRight: SIZES.large,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
  },
};

export default Intro;
