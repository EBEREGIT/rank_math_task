// external import
import PropTypes from "prop-types";

const Btn = ({ name, classes }) => {
  return <button className={`clickable ${classes}`}>{name}</button>;
};

Btn.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.string,
};

export default Btn;
