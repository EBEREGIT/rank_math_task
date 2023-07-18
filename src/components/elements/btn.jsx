// internal import
import { COLORS, SIZES } from "../../constant";

// external import
import PropTypes from "prop-types";

const Btn = ({ name }) => {
  return (
    <button style={styles.btn} className="clickable">
      {name}
    </button>
  );
};

Btn.propTypes = {
  name: PropTypes.string,
};

const styles = {
  btn: {
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.gray,
    fontSize: SIZES.medium,
    fontWeight: "bold",
    borderRadius: SIZES.medium,
    paddingLeft: SIZES.xxLarge,
    paddingRight: SIZES.xxLarge,
    color: COLORS.text,
  },
};

export default Btn;
