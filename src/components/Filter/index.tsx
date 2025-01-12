import Select, { SingleValue } from "react-select";
import { OptionType } from "../../types";
import { useSearchParams } from "react-router-dom";

type FilterProps = {
  data: OptionType[];
  paramName: string;
};

const Filter = ({ data, paramName }: FilterProps) => {
  const [params, setParams] = useSearchParams();
  const handleChange = (e: SingleValue<OptionType>) => {
    params.set(paramName, e?.value as string);

    setParams(params);
  };

  const selectedOption = {
    value: params.get(paramName) || data[0].value,
    label: params.get(paramName) || data[0].label,
  };
  return (
    <div className="w-fit">
      <Select
        onChange={handleChange}
        className="text-black min-w-[100px]"
        options={data}
        defaultValue={selectedOption}
      />
    </div>
  );
};

export default Filter;
