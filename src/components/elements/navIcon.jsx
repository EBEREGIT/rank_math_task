// external import
import PropTypes from "prop-types";

// internal import
import { IconContext } from "react-icons";

const NavIcon = ({ icon, size, color, className }) => {
  return (
    <IconContext.Provider
      value={{ size: size, color: color, className: className }}
    >
      {icon}
    </IconContext.Provider>
  );
};

NavIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default NavIcon;
