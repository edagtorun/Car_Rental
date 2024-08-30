import { CarType } from "./../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3a018899a3msh42c01566c4542b3p13caa0jsnbc374e087ca6",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
};

export async function fetchCars(paramsObj: FilterType): Promise<CarType[]> {
  const {
    limit = "5",
    make = "bmw",
    model = "m5",
    fuel_type = "",
    year = "",
  } = paramsObj;

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}`;

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data); // Dönen veriyi kontrol edin

    // Eğer API'den dönen veri bir dizi değilse, hata atın
    if (!Array.isArray(data)) {
      console.error("API'den beklenen formatta veri dönmedi:", data);
      throw new Error("API'den beklenen formatta veri dönmedi.");
    }

    return data;
  } catch (error) {
    console.error("Veri çekme sırasında hata oluştu:", error);
    return []; // Hata durumunda boş bir dizi döndür
  }
}
