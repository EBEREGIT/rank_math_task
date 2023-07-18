import { AreaChart, Tooltip, Area, ResponsiveContainer } from "recharts";
import ListItem from "../../elements/listItem";
import { COLORS, SIZES } from "../../../constant";

const data = [
  {
    uv: 1500,
  },
  {
    uv: 2500,
  },
  {
    uv: 2200,
  },
  {
    uv: 2700,
  },
  {
    uv: 3000,
  },
  {
    uv: 2300,
  },
  {
    uv: 2500,
  },
];

export default function Body() {
  return (
    <>
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
  },
  aside: {
    width: `${SIZES.xSmall * 5}%`,
    marginLeft: SIZES.large,
    // position: "absolute",
    // top: `${SIZES.xSmall * 7.5}%`,
    // left: SIZES.large,
  },
};
