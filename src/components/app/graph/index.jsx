import { COLORS, SIZES } from "../../../constant";
import Body from "./body";
import Header from "./header";

const Graph = () => {
  return (
    <div style={styles.container} className="shadow">
      <Header />
      <Body />
    </div>
  );
};

const styles = {
  container: {
    margin: SIZES.large,
    paddingTop: SIZES.large,
    paddingRight: SIZES.large,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.large,
  },
};

export default Graph;
