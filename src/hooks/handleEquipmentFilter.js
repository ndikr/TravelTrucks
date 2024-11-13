export default function handleEquipmentFilter(filters) {
  let form;
  switch (filters.form) {
    case "Van":
      form = "panelTruck";
      break;
    case "Fully Integrated":
      form = "fullyIntegrated";
      break;
    case "Alcove":
      form = "alcove";
      break;
    default:
      form = "";
  }
  return {
    location: filters.location,
    form,
    transmission: filters.equipment.automatic === true ? "automatic" : "",
    engine: filters.equipment.petrol === true ? "petrol" : "",
    AC: filters.equipment.ac ? filters.equipment.ac : "",
    bathroom: filters.equipment.bathroom ? filters.equipment.bathroom : "",
    kitchen: filters.equipment.kitchen ? filters.equipment.kitchen : "",
    TV: filters.equipment.tv ? filters.equipment.tv : "",
    radio: filters.equipment.radio ? filters.equipment.radio : "",
    refrigerator: filters.equipment.refrigerator
      ? filters.equipment.refrigerator
      : "",
    microwave: filters.equipment.microwave ? filters.equipment.microwave : "",
    gas: filters.equipment.gas ? filters.equipment.gas : "",
    water: filters.equipment.water ? filters.equipment.water : "",
  };
}
