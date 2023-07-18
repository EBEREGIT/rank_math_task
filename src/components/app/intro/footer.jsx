import NavIcon from "../../elements/navIcon";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { COLORS, SIZES } from "../../../constant";
import { toggle } from "../../../lib/functions";
import { useContext } from "react";
import { AppContext } from "../../../context";
import Btn from "../../elements/btn";

const Footer = () => {
  const { btnToggle, setBtnToggle } = useContext(AppContext);

  return (
    <main style={styles.container}>
      {!btnToggle ? (
        <div style={styles.btnContainer}>
          <Btn name={"Buy"} />
          <Btn name={"Sell"} />
        </div>
      ) : (
        ""
      )}

      <section
        style={styles.iconContainer}
        onClick={() => toggle(btnToggle, setBtnToggle)}
      >
        <NavIcon
          icon={btnToggle ? <FaChevronDown /> : <FaChevronUp />}
          size={SIZES.large * 1.5}
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
  },
  iconContainer: {
    textAlign: "center",
    marginTop: SIZES.large,
  },
};

export default Footer;
