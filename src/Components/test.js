import Select from "react-select";
import { useContext, useState } from "react";
import { Context } from "../Store";

const allOptions = [
  {
    label: "john",
    value: 1,
  },
  {
    label: "joe",
    value: 2,
  },
  {
    label: "joel",
    value: 3,
  },
  {
    label: "jackie",
    value: 4,
  },
];

const generateInitialState = (numberOfSelects) =>
  numberOfSelects.map((item) => null);

//console.log(generateInitialState())

const CustomSelectComponent = ({ value, options, onSelect }) => {
  return <Select value={value} options={options} onChange={onSelect} />;
};

export default function Test() {
  const [state, dispatch] = useContext(Context);
  const [team, setTeam] = useState(state.team);
  const [selectState, setSelectState] = useState(() =>
    // increase the array elements to add more select fields
    generateInitialState(["Group1", "Group2", "Group3", "Group4", "Group5"])
  );

  console.log(selectState);

  const onSelectValues = (value, index) => {
    // clone state
    const clonedSelectState = JSON.parse(JSON.stringify(selectState));

    clonedSelectState[index] = value;
    setSelectState(clonedSelectState);
    console.log(selectState);
  };

  return (
    <div className="App">
      {selectState.map((selectCount, index) => {
        const options = getOptionsToRender(selectState, team);
        return (
          <CustomSelectComponent
            value={selectState[index]}
            options={options}
            onSelect={(value) => onSelectValues(value, index)}
            key={index}
          />
        );
      })}
    </div>
  );
}

const getOptionsToRender = (allSelectedOptions, team) => {
  // convert [[{}, {}], [{}]] -> [{}, {}, {}]
  const filteredOptions = allSelectedOptions.flatMap((options) => options);

  const optionsToRender =
    filteredOptions.length > 0
      ? allOptions.filter(
          (option) =>
            !filteredOptions.some(
              (selectOption) =>
                option && selectOption && option.value === selectOption.value
            )
        )
      : allOptions;

  return optionsToRender;
};
