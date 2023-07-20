// external import
import { FaRadio } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
import { FaMapMarkerAlt, FaBell } from "react-icons/fa";

// internal import
import MenuItem from "./menuItem";
import { COLORS, SIZES } from "../../../constant";

const Footer = () => {
  return (
    // looping through footer menu item
    <div style={styles.container}>
      <section style={styles.section} >
        {[
          [<FaRadio key={1} />, "FaRadio"],
          [<FaMapMarkerAlt key={2} />, "FaMapMarkerAlt"],
          [<FaBell key={3} />, "FaBell"],
          [<AiFillSetting key={4} />, "AiFillSetting"],
        ].map((item, index) => (
          <MenuItem key={index} icon={item[0]} name={item[1]} />
        ))}
      </section>
    </div>
  );
};

const styles = {
  container: {
    position: "sticky",
    left: 0,
    bottom: 0,
    width: `${SIZES.xSmall * 10}%`,
    backgroundColor: COLORS.white,
    height: SIZES.xSmall * 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  section: {
    width: `${SIZES.xSmall * 9}%`,
    margin: 'auto',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  }
};

export default Footer;
