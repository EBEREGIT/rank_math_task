// external import
import PropTypes from "prop-types";

// internal import
import ListItem from "../../elements/listItem";
import { COLORS, SIZES } from "../../../constant";

const Header = () => {
  return (
    <>
      {/* looping through footer menu item */}
      <header style={styles.container}>
        {[
          ["Lower", 4.895, COLORS.pink],
          ["Higher", 6.857, COLORS.green],
        ].map((item, index) => (
          <ListItem
            key={index}
            name={item[0]}
            price={item[1]}
            color={item[2]}
            fontWeightAdjuster={15}
            textColor={COLORS.gray3}
          />
        ))}
      </header>
    </>
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
    paddingLeft: SIZES.xxSmall,
  },
};

export default Header;
