// external import
import { useContext } from "react";
import PropTypes from "prop-types";

// internal import
import { COLORS, SIZES } from "../../../constant";
import NavIcon from "../../elements/navIcon";
import { AppContext } from "../../../context";

const MenuItem = ({ icon, name }) => {
  const { selectedFooterTab, setSelectedFooterTab } = useContext(AppContext);

  return (
    <>
      {/* menu item for the footer navigation */}
      <div onClick={() => setSelectedFooterTab(name)}>
        <NavIcon
          icon={icon}
          size={SIZES.large * 1.5}
          color={selectedFooterTab !== name ? COLORS.icon : COLORS.text}
        />
      </div>
    </>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};

export default MenuItem;
