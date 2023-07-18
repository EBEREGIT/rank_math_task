// external import
import PropTypes from "prop-types";
import React, { useContext } from "react";

// internal import
import { COLORS, SIZES } from "../../../constant";
import { AppContext } from "../../../context";

const Tab = ({ name }) => {
  const { selectedTab, setSelectedTab } = useContext(AppContext);

  return (
    <section
      style={selectedTab !== name ? {} : styles.container}
      onClick={() => setSelectedTab(name)}
    >
      <p style={selectedTab !== name ? styles.p : styles.pClicked}>{name}</p>
    </section>
  );
};

Tab.propTypes = {
  name: PropTypes.string,
};

const styles = {
  container: {
    backgroundColor: COLORS.text,
    paddingTop: SIZES.xxSmall,
    paddingBottom: SIZES.xxSmall,
    paddingRight: SIZES.xLarge,
    paddingLeft: SIZES.xLarge,
    borderRadius: SIZES.xxLarge,
  },
  p: {
    color: COLORS.text,
    fontWeight: SIZES.xSmall * 50,
  },
  pClicked: {
    color: COLORS.background,
    fontWeight: SIZES.xSmall * 50,
  },
};

export default Tab;
