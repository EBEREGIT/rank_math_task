// external import
import PropTypes from "prop-types";
import { useContext } from "react";

// internal import
import { COLORS, SIZES } from "../../constant";
import { AppContext } from "../../context";

const ListItem = ({ name, color, price, fontWeightAdjuster, removeColon }) => {
  const { tabValues, selectedTab } = useContext(AppContext);

  return (
    <section style={styles.section}>
      {/* list decoration color */}
      <aside
        style={{
          border: `5px solid ${color}`,
          width: `1px`,
          height: `1px`,
          borderRadius: `${SIZES.xSmall}px`,
          marginRight: `${SIZES.xSmall}px`,
          backgroundColor: `${color}`,
        }}
      ></aside>

      {/* list name */}
      <p
        style={{
          color: COLORS.text,
          fontWeight: SIZES.xxLarge * fontWeightAdjuster,
        }}
      >
        <span>
          {name}
          {removeColon ?? ":"}{" "}
        </span>

        {/* list value */}
        <span>${(price * tabValues[selectedTab]).toFixed(2)}</span>
      </p>
    </section>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.number,
  removeColon: PropTypes.bool,
  fontWeightAdjuster: PropTypes.number,
};

const styles = {
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
};

export default ListItem;
