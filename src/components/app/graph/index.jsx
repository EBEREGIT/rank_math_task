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
    marginLeft: SIZES.large + 20,
    marginRight: SIZES.large + 20,
    marginTop: SIZES.large + 5,
    marginBottom: SIZES.large + 5,
    paddingTop: SIZES.large + 5,
    paddingRight: SIZES.large + 5,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    position: "relative",
  },
};

export default Graph;
