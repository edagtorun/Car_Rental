import { useEffect, useRef, useState } from "react";
import Filter from "../../components/Filter";
import Hero from "../../components/Hero";
import SearchBar from "../../components/SearchBar";
import { fetchCars } from "../../utils/fetchCars";
import { CarType } from "../../types";
import Card from "../../components/Card";
import ShowMore from "../../components/ShowMore";
import { useSearchParams } from "react-router-dom";
import { fuels, years } from "../../constans";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const catalogRef = useRef<HTMLDivElement>(null);

  const [params] = useSearchParams();

  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());

    setIsLoading(true);
    fetchCars(paramsObj)
      .then((data) => setCars(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false)); // Yükleniyor durumunu güncelle
  }, [params]);

  return (
    <div className="mb-40">
      <Hero element={catalogRef} />

      <div ref={catalogRef} className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Koltuğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <Filter paramName="fuel_type" data={fuels} />
            <Filter paramName="year" data={years} />
          </div>
        </div>

        {isLoading ? (
          <div className="warn-container">
            <h2>Yükleniyor...</h2>
          </div>
        ) : isError ? (
          <div className="warn-container">
            <h2>Üzgünüz. Verileri alırken hata oluştu.</h2>
          </div>
        ) : cars && cars.length < 1 ? (
          <div className="warn-container">
            <h2>Aranılan kriterlere uygun araba bulunamadı.</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
            <ShowMore />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
