import { COLORS, SIZES } from "../../../constant";
import TransactionBTN from "./transactionBTN";

const Transact = () => {
  return (
    <div style={styles.container}>
      {[
        ["Buy", COLORS.blue],
        ["Sell", COLORS.pink],
      ].map((item, index) => (
        <TransactionBTN
          name={item[0]}
          bgColor={item[1]}
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
  },
};

export default Transact;
