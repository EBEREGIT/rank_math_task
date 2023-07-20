// external import
import { MdMoreVert } from "react-icons/md";
import { GoChevronLeft } from "react-icons/go";
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
          icon={<GoChevronLeft />}
          size={SIZES.large * 2}
          color={COLORS.gray3}
          className="bold"
        />
      </aside>

      {/* heading logo */}
      <section>
        <h2 style={styles.h2}>Bitcoin Wallet</h2>
      </section>

      {/* menu */}
      <aside style={styles.right}>
        <MenuIcon
          icon={<MdMoreVert />}
          size={SIZES.large * 2}
          color={menuToggle ? COLORS.gray3 : COLORS.white}
          className="bold"
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
    color: COLORS.text1,
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
