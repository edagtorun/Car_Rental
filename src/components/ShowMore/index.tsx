import { useSearchParams } from "react-router-dom";
import Button from "../Button";

const ShowMore = () => {
  const [params, setParams] = useSearchParams();

  // 1. Url'de limit parametresi yoksa:
  //Kullanici projeye yeni girmistir ve varsayilan olarak ekranda 5 arac vardir.
  // butona tiklaninca limit 10'a ayarlanmali

  //2. Url'de limit parametresi varsa;
  //Kullanici en az bir kere butona basmistir.
  // Mevcut limitin uzerine 5 ekle

  //url'den limit parametresini al
  const limit = Number(params.get("limit") || 5);
  const increaseLimit = () => {
    //yeni limiti belirle
    const newLimit = limit + 5;

    //parametreleri guncelle
    params.set("limit", String(newLimit));

    //url'i guncelle
    setParams(params);
  };
  return (
    <div className="w-full flex-center gap-5 my-10">
      {limit < 30 && <Button title="Daha Fazla" handleClick={increaseLimit} />}
    </div>
  );
};

export default ShowMore;
