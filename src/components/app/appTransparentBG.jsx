import { useContext } from "react";
import { COLORS, SIZES } from "../../constant";
import { AppContext } from "../../context";
import { toggle } from "../../lib/functions";

const AppTransparentBG = () => {
  const { menuToggle, setMenuToggle } = useContext(AppContext);

  return (
    <main
      style={styles.container}
      className={menuToggle ? "app_transparent_bg_hidden" : ""}
      onClick={() => toggle(menuToggle, setMenuToggle)}
    ></main>
  );
};

const styles = {
  container: {
    backgroundColor: COLORS.black,
    height: `${SIZES.xSmall * 10}vh`,
    width: `${SIZES.xSmall * 10}%`,
    position: "absolute",
    top: 0,
    right: 0,
    opacity: 0.75,
  },
};

export default AppTransparentBG;
