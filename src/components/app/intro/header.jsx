// internal import
import { COLORS, SIZES } from "../../../constant";
import CircleIcon from "../../elements/circleIcon";

// external import
import { BsCurrencyBitcoin } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header style={styles.container}>
        <aside style={styles.container}>
          <CircleIcon
            icon={<BsCurrencyBitcoin />}
            size={SIZES.large * 1.5}
            color={COLORS.white}
            bgColor={COLORS.orange}
          />
          <p style={styles.p1}>Bitcoin</p>
        </aside>

        <aside>
          <p style={styles.p2}>BTC</p>
        </aside>
      </header>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  p1: {
    marginLeft: SIZES.large,
    color: COLORS.black,
  },
  p2: {
    marginLeft: SIZES.large,
    color: COLORS.text,
  },
};

export default Header;
