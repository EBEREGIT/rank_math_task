// external import
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useContext } from "react";

// internal import
import NavIcon from "../../elements/navIcon";
import { COLORS, SIZES } from "../../../constant";
import { toggle } from "../../../lib/functions";
import { AppContext } from "../../../context";
import Btn from "../../elements/btn";

const Footer = () => {
  const { btnToggle, setBtnToggle } = useContext(AppContext);

  return (
    <main style={styles.container}>
      {/* buy and sell buttons */}
      {!btnToggle ? (
        <div style={styles.btnContainer}>
          <Btn name={"Buy"} classes={"blue_btn"} />
          <Btn name={"Sell"} classes={"pink_btn"}/>
        </div>
      ) : (
        ""
      )}

      {/* toggle button to show or hide the buttons above */}
      <section
        style={styles.iconContainer}
        onClick={() => toggle(btnToggle, setBtnToggle)}
        className="clickable"
      >
        <NavIcon
          icon={btnToggle ? <GoChevronDown /> : <GoChevronUp />}
          size={SIZES.large * 2}
          color={COLORS.icon}
        />
      </section>
    </main>
  );
};

const styles = {
  container: {
    marginTop: SIZES.large,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: SIZES.xxLarge,
  },
  iconContainer: {
    textAlign: "center",
    marginTop: SIZES.large,
  },
};

export default Footer;
