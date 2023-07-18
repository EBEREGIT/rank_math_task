import { COLORS, SIZES } from "../../../constant";

const Body = () => {
  return (
    <main style={styles.container}>
      <h1>3.529020 BTC</h1>

      <section style={styles.section}>
        <h2 style={styles.h3a}>$19.153 USD</h2>

        <aside style={styles.aside}>
          <h3 style={styles.h3b}>- 2.32%</h3>
        </aside>
      </section>
    </main>
  );
};

const styles = {
  container: {
    width: `${SIZES.large * 5}%`,
    marginTop: SIZES.medium,
  },
  h3a:{
    color: COLORS.gray2,
    fontWeight: "bold"
  },
  h3b:{
    color: COLORS.white,
    fontWeight: "bold"
  },
  section:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  aside:{
    backgroundColor: COLORS.pink,
    padding: SIZES.xxSmall - 2,
    borderRadius: SIZES.medium,
    paddingLeft: SIZES.small,
    paddingRight: SIZES.small,
  }
};

export default Body;
