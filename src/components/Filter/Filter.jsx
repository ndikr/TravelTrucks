import { FiWind } from "react-icons/fi";
import { MdTv } from "react-icons/md";
import {
  BsDiagram3,
  BsCupHot,
  BsDroplet,
  BsGrid1X2,
  BsGrid,
  BsGrid3X3Gap,
  BsFuelPump,
  BsUiRadios,
  BsPeople,
} from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { LuMicrowave } from "react-icons/lu";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";

import css from "./Filter.module.css";
import { FaQuestion } from "react-icons/fa";
export default function Filter({ name, size }) {
  let IconComponent;
  switch (name) {
    case "Automatic":
      IconComponent = BsDiagram3;
      break;
    case "Petrol":
      IconComponent = BsFuelPump;
      break;
    case "AC":
      IconComponent = FiWind;
      break;

    case "Bathroom":
      IconComponent = BsDroplet;
      break;
    case "Kitchen":
      IconComponent = BsCupHot;
      break;

    case "TV":
      IconComponent = MdTv;
      break;
    case "Radio":
      IconComponent = BsUiRadios;
      break;
    case "Refrigerator":
      IconComponent = CgSmartHomeRefrigerator;
      break;
    case "Microwave":
      IconComponent = LuMicrowave;
      break;
    case "Gas":
      IconComponent = MdOutlineLocalGasStation;
      break;
    case "Water":
      IconComponent = FaHandHoldingWater;
      break;

    case "2 Adults":
      IconComponent = BsPeople;
      break;
    case "Van":
      IconComponent = BsGrid1X2;
      break;
    case "Fully Integrated":
      IconComponent = BsGrid;
      break;
    case "Alcove":
      IconComponent = BsGrid3X3Gap;
      break;
    default:
      IconComponent = FaQuestion;
      break;
  }

  return (
    <>
      <IconComponent size={size} />
      {name}
    </>
  );
}
