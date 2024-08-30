import { CarType } from "./../types";
import { colors } from "../constans";
//Fonksiyon bizden parametre olarak gonderilen araba icin aracin fotograf url'ini
// temel url: https://cdn.imagin.studio/getimage
//aracin bilgilerini dinamik olarak url'e ekleyecegiz.
// https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=bmw&modelFamily=m3&zoomType=fullscreen

const generateImage = (car: CarType, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split("/")[0]);
  url.searchParams.append("zoomType", "fullscreen");

  //eger aci verildiyse onuda ekle
  if (angle) {
    url.searchParams.append("angle", angle);
  }

  //rastgele bir renk sec
  const i = Math.floor(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);

  return url.href;
};

export default generateImage;
