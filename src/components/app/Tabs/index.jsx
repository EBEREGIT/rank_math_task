import { SIZES } from "../../../constant";
import Tab from "./tab";

const Tabs = () => {
  return (
    <div style={styles.container}>
      {["Day", "Week", "Month", "Year"].map((item, index) => (
        <Tab name={item} key={index} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: `${SIZES.xSmall * 8.5}%`,
    margin: "auto",
  },
};

export default Tabs;
