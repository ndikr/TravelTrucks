import css from "./Features.module.css";
import Characteristics from "../Characteristics/Characteristics";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
export default function Features({ data }) {
  return (
    <div className={css.features}>
      <Characteristics
        data={{
          automatic: data.transmission === "automatic",
          engine: data.engine === "petrol",
          AC: data.AC,
          bathroom: data.bathroom,
          kitchen: data.kitchen,
          TV: data.TV,
          radio: data.radio,
          refrigerator: data.refrigerator,
          microwave: data.microwave,
          gas: data.gas,
          water: data.water,
        }}
      ></Characteristics>
      <VehicleDetails data={data}></VehicleDetails>
    </div>
  );
}
