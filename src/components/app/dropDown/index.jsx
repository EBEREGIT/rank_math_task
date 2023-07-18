// external import
import { IoIosMore } from "react-icons/io";
import { useContext } from "react";

// internal import
import { COLORS, SIZES } from "../../../constant";
import { AppContext } from "../../../context";
import Body from "./body";
import MenuIcon from "../../elements/menuIcon";

const DropDown = () => {
  const { menuToggle } = useContext(AppContext);

  return (
    <section
      style={styles.container}
      className={menuToggle ? "app_transparent_bg_hidden" : ""}
    >
      {/* menu icon */}
      <MenuIcon
        icon={<IoIosMore />}
        size={SIZES.large * 1.5}
        color={COLORS.white}
        style={styles.header}
      />

      {/* menu items */}
      <Body />
    </section>
  );
};

const styles = {
  container: {
    position: "absolute",
    minWidth: `${SIZES.xSmall * 6.5}%`,
    height: `${SIZES.xSmall * 10}vh`,
    top: 0,
    right: 0,
    marginRight: SIZES.medium,
  },
  header: {
    display: "flex",
    flexDirection: "row-reverse",
    padding: SIZES.large,
  },
};

export default DropDown;
