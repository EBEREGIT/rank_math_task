// external import
import { AreaChart, Tooltip, Area, ResponsiveContainer } from "recharts";

// internal import
import ListItem from "../../elements/listItem";
import { COLORS, SIZES } from "../../../constant";
import { useContext } from "react";
import { AppContext } from "../../../context";

export default function Body() {
  const { tabValues, selectedTab } = useContext(AppContext);

  // dummy data
  const data = [
    {
      uv: tabValues[selectedTab] * 1500,
    },
    {
      uv: 2500,
    },
    {
      uv: tabValues[selectedTab] * 2200,
    },
    {
      uv: 3000,
    },
    {
      uv: tabValues[selectedTab] * 2700,
    },
    {
      uv: tabValues[selectedTab] * 5.483,
    },
    {
      uv: 5300,
    },
  ];

  return (
    <>
      {/* graph */}
      <div style={styles.container}>
        <ResponsiveContainer width={`100%`} height={150}>
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
              fill="#fef4e8"
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
          fontWeightAdjuster={25}
          removeColon={true}
        />
      </aside>
    </>
  );
}

const styles = {
  container: {
    position: "relative",
  },
  aside: {
    width: `${SIZES.xSmall * 5}%`,
    marginLeft: SIZES.large,
  },
};
