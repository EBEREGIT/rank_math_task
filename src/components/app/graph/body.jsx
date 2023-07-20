// external import
import { AreaChart, Tooltip, Area, ResponsiveContainer } from "recharts";

// internal import
import ListItem from "../../elements/listItem";
import { COLORS, SIZES } from "../../../constant";
import { useContext } from "react";
import { AppContext } from "../../../context";

export default function Body() {
  const { tabValues, selectedTab } = useContext(AppContext);

  // data
  const data = [
    {
      uv: tabValues[selectedTab] * 350,
    },
    {
      uv: 400,
    },
    {
      uv: tabValues[selectedTab] * 320,
    },
    {
      uv: 300,
    },
    {
      uv: tabValues[selectedTab] * 470,
    },
    {
      uv: tabValues[selectedTab] * 300.483,
    },
    {
      uv: 530,
    },
  ];

  return (
    <>
      {/* graph */}
      <div style={styles.container}>
        <ResponsiveContainer width={`100%`} height={200}>
          <AreaChart
            data={data}
            margin={{ top: 50, right: 30, left: 0, bottom: 0 }}
          >
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#f7931a"
              strokeWidth={3.5}
              fillOpacity={1}
              fill="#fef7ec"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* label */}
      <aside style={styles.aside}>
        <ListItem
          name={"1BTC ="}
          price={5.483}
          color={COLORS.orange}
          fontWeightAdjuster={18}
          removeColon={true}
          textColor={COLORS.text1}
        />
      </aside>
    </>
  );
}

const styles = {
  container: {
    // position: "relative",
  },
  aside: {
    width: `${SIZES.xSmall * 5}%`,
    marginLeft: SIZES.large,
    position: "absolute",
    top: SIZES.large * 10
  },
};
