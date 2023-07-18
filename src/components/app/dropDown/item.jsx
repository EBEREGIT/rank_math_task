// external import
import PropTypes from "prop-types";

// internal import
import NavIcon from "../../elements/navIcon";
import { SIZES } from "../../../constant";

const Item = ({ icon, size, color, name, showHR, textColor }) => {
  return (
    <>
      {/* menu item for the dropdown menu */}
      <section style={styles.container}>
        <p style={textColor ? { color: textColor } : styles.text}>{name}</p>
        <NavIcon icon={icon} size={size} color={color} />
      </section>

      {/* show the horizontal rule is showHR is true */}
      {showHR ?? <hr />}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: SIZES.xSmall,
    paddingBottom: SIZES.xSmall,
    paddingRight: SIZES.small + 2,
  },
  text: {
    fontSize: SIZES.medium + 2,
    fontWeight: `${SIZES.xSmall * 10}`,
  },
};

Item.propTypes = {
  icon: PropTypes.element.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.string,
  showHR: PropTypes.bool,
  textColor: PropTypes.string,
};

export default Item;
