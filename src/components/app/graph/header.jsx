import PropTypes from "prop-types";
import ListItem from "../../elements/listItem";
import { COLORS, SIZES } from "../../../constant";

// eslint-disable-next-line no-unused-vars
const Header = () => {
  return (
    <header style={styles.container}>
      <ListItem name={"Lower"} price={4.895} color={COLORS.pink} />
      <ListItem name={"higher"} price={6.857} color={COLORS.green} />
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: SIZES.large,
  },
};

export default Header;
