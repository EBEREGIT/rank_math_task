import PropTypes from "prop-types";
import NavIcon from "../../elements/navIcon";
import { SIZES } from "../../../constant";

const Item = ({ icon, size, color, name, showHR, textColor }) => {
  return (
    <>
      <section style={styles.container}>
        <p style={textColor ? { color: textColor } : styles.text}>{name}</p>
        <NavIcon icon={icon} size={size} color={color} />
      </section>

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
    fontWeight: 500,
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
