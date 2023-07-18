import { COLORS, SIZES } from "../../../constant";
import {
  IoMdInformationCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdIosShare } from "react-icons/md";
import Background from "../../elements/Card/background";
import Item from "./item";

const Body = () => {
  return (
    <Background
      content={
        <>
          {[
            [<FaRegEdit key={1} />, SIZES.large * 1.2, COLORS.black, "Edit"],
            [
              <IoMdInformationCircleOutline key={2} />,
              SIZES.large * 1.2,
              COLORS.black,
              "Courier info",
            ],
            [<MdIosShare key={3} />, SIZES.large * 1.2, COLORS.black, "Share"],
            [
              <IoIosRemoveCircleOutline key={4} />,
              SIZES.large * 1.2,
              "red",
              "Remove",
              false,
            ],
          ].map((item, index) => (
            <Item
              key={index}
              icon={item[0]}
              size={item[1]}
              color={item[2]}
              textColor={item[2]}
              name={item[3]}
              showHR={item[4]}
            />
          ))}
        </>
      }
    />
  );
};

export default Body;
