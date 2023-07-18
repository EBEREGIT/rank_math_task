// external import
import { useContext } from "react";
import PropTypes from "prop-types";

// internal import
import { toggle } from "../../lib/functions";
import { AppContext } from "../../context";
import NavIcon from "./navIcon";

const MenuIcon = ({ icon, size, color, style }) => {
  const { menuToggle, setMenuToggle } = useContext(AppContext);

  return (
    <section
      style={style}
      onClick={() => toggle(menuToggle, setMenuToggle)}
    >
      <NavIcon icon={icon} size={size} color={color} />
    </section>
  );
};

MenuIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
};

export default MenuIcon;
