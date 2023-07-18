import { COLORS, SIZES } from "../../../constant";
import NavIcon from "../../elements/navIcon";
import PropTypes from "prop-types";

const MenuItem = ({ icon }) => {
  return (
    <div style={styles.container}>
      <NavIcon icon={icon} size={SIZES.large * 1.5} color={COLORS.icon} />
    </div>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.element.isRequired,
};

const styles = {
  container: {
  },
};

export default MenuItem;
