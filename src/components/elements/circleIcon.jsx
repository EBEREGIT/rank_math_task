// external import
import PropTypes from "prop-types";

// internal import
import NavIcon from "./navIcon";
import { SIZES } from "../../constant";

const CircleIcon = ({ icon, size, color, bgColor }) => {
  return (
    <section style={styles.container(bgColor)}>
      <NavIcon icon={icon} size={size} color={color} className={"icon_style"} />
    </section>
  );
};

CircleIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  style: PropTypes.object,
};

const styles = {
  container: (bgColor) => ({
    backgroundColor: bgColor,
    borderRadius: SIZES.xxLarge,
    padding: SIZES.small,
    width: SIZES.medium,
    height: SIZES.medium,
  }),
};

export default CircleIcon;
