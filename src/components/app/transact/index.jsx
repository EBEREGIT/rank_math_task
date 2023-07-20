import { COLORS, SIZES } from "../../../constant";
import TransactionBTN from "./transactionBTN";

const Transact = () => {
  return (
    <div style={styles.container}>
      {[
        ["Buy", COLORS.blue, "blue_bg_gradient"],
        ["Sell", COLORS.pink, "pink_bg_gradient"],
      ].map((item, index) => (
        <TransactionBTN
          name={item[0]}
          bgColor={item[1]}
          className={item[2]}
          key={index}
          mr={item[0] === "Sell" ? SIZES.medium : 0}
          ml={item[0] === "Buy" ? SIZES.medium : 0}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    margin: SIZES.large,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: SIZES.large + 20,
    marginRight: SIZES.large + 20,
    marginTop: SIZES.large + 5,
    marginBottom: SIZES.large + 5,
  },
};

export default Transact;
