import Select from "react-select";
import { OptionType } from "../../types";
import { makes } from "../../constans";
import { useState, useMemo, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

const Button = ({ designs }: { designs?: string }) => {
  return (
    <button className={`ml-3 x-10 ${designs}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} />
    </button>
  );
};
const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  //markalar dizisindeki elemanlari react-selct'in istedigi veri formatina getiriyoruz. Her render sirasinda gereksiz tekrar hesaplamayi onlemek icinde useMemo kullandik.
  const options: OptionType[] = useMemo(
    () =>
      makes.map((make) => ({
        label: make,
        value: make,
      })),
    []
  );

  //form gonderilince secilen marka ve modeli url'e param olarak ekle
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setParams({ make, model });
  };
  const selectedMake = {
    label: params.get("make") || "",
    value: params.get("make") || "",
  };
  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <Select
          onChange={(e) => e && setMake(e.value)}
          className="w-full text-black"
          options={options}
          defaultValue={selectedMake}
        />

        <Button designs="sm:hidden" />
      </div>

      <div className="searchbar__item ">
        <img width={25} className="absolute ml-4" src="/model-icon.png" />
        <input
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input rounded text-black"
          type="text"
          placeholder="Orn:Civic"
          defaultValue={params.get("model") || ""}
        />

        <Button designs="sm:hidden" />
      </div>

      <Button designs="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
