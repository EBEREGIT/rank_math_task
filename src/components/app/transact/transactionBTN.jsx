import PropTypes from "prop-types";
import CircleIcon from "../../elements/circleIcon";
import { BsCurrencyDollar } from "react-icons/bs";
import { COLORS, SIZES } from "../../../constant";

const TransactionBTN = ({ name, className, mr, ml }) => {
  return (
    <aside style={styles.container(mr, ml)} className="shadow">
      <>
        <CircleIcon
          icon={<BsCurrencyDollar />}
          size={SIZES.large * 1.5}
          color={COLORS.white}
          className={className}
        />

        <h4 style={styles.h4}>{name} BTC</h4>
      </>
    </aside>
  );
};

TransactionBTN.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  mr: PropTypes.number,
  ml: PropTypes.number,
};

const styles = {
  container: (ml, mr) => ({
    width: `${SIZES.xxLarge * 2}%`,
    textAlign: "center",
    padding: SIZES.xxLarge,
    marginLeft: ml,
    marginRight: mr,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  h4: {
    marginTop: SIZES.medium,
    color: COLORS.text1
  },
};

export default TransactionBTN;
