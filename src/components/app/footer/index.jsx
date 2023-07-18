import MenuItem from "./menuItem";
import { FaRadio } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
import { FaMapMarkerAlt, FaBell } from "react-icons/fa";
import { COLORS, SIZES } from "../../../constant";

const Footer = () => {
  return (
    <div style={styles.container}>
      <MenuItem icon={<FaRadio />} />
      <MenuItem icon={<FaMapMarkerAlt />} />
      <MenuItem icon={<FaBell />} />
      <MenuItem icon={<AiFillSetting />} />
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: SIZES.xSmall * 8,
  },
};

export default Footer;
