// external import
import PropTypes from "prop-types";

// internal import
import { COLORS, SIZES } from "../../../constant";

const Background = ({ content }) => {
  return <div style={styles.container}>{content}</div>;
};

Background.propTypes = {
  content: PropTypes.any,
};

const styles = {
  container: {
    height: "auto",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.large,
    padding: SIZES.large,
    paddingTop: SIZES.xxSmall,
    paddingBottom: SIZES.xxSmall,
    paddingRight: 0,
  },
};

export default Background;
