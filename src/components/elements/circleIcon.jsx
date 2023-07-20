// external import
import PropTypes from "prop-types";

// internal import
import NavIcon from "./navIcon";
import { SIZES } from "../../constant";

const CircleIcon = ({ icon, size, color, className }) => {
  return (
    <section className={className} style={styles.container}>
      <NavIcon icon={icon} size={size} color={color} className={"icon_style"} />
    </section>
  );
};

CircleIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

const styles = {
  container: ({
    borderRadius: SIZES.xxLarge,
    padding: SIZES.small,
    width: SIZES.medium,
    height: SIZES.medium,
  }),
};

export default CircleIcon;
