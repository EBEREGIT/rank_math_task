// external import
import { IoIosArrowBack, IoMdMore } from "react-icons/io";
import { useContext } from "react";

// internal import
import NavIcon from "../../elements/navIcon";
import { COLORS, SIZES } from "../../../constant";
import MenuIcon from "../../elements/menuIcon";
import { AppContext } from "../../../context";

const Navigation = () => {
  const { menuToggle } = useContext(AppContext);

  return (
    <nav style={styles.container}>
      {/* back icon */}
      <aside style={styles.left}>
        <NavIcon
          icon={<IoIosArrowBack />}
          size={SIZES.large * 1.5}
          color={COLORS.icon}
        />
      </aside>

      {/* heading/logo */}
      <section>
        <h2 style={styles.h2}>Bitcoin Wallet</h2>
      </section>

      {/* menu */}
      <aside style={styles.right}>
        <MenuIcon
          icon={<IoMdMore />}
          size={SIZES.large * 1.5}
          color={menuToggle ? COLORS.text : COLORS.white}
        />
      </aside>
    </nav>
  );
};

const styles = {
  container: {
    position: "sticky",
    top: 0,
    backgroundColor: COLORS.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: SIZES.xSmall * 8,
    width: `${SIZES.xSmall * 10}%`,
  },
  h2: {
    color: COLORS.text,
    marginTop: -7.5,
  },
  left: {
    paddingLeft: SIZES.medium,
  },
  right: {
    paddingRight: SIZES.medium,
  },
};

export default Navigation;
