import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();
const API_KEY = '7f95383d728e440ab43144623230405'

const WeatherContextProvider = ({ children }) => {

  // const [cityData, setCityData] = useState(['Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya', 'Ardahan', 'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Iğdır', 'Isparta', 'İstanbul', 'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kırıkkale', 'Kırklareli', 'Kırşehir', 'Kilis', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Mardin', 'Mersin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Şanlıurfa', 'Şırnak', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak']);

  const cityData = [
    { id: 1, cityPhoto: "https://im.haberturk.com/2023/04/27/ver1682599142/3586723_810x458.jpg", cityName: "Adana" },
    { id: 2, cityPhoto: "https://turkiyetatilyerleri.vipkonaklama.com/wp-content/uploads/2020/08/adiyaman-gezilecek-yerler-ve-tatil-yerleri-768x432.jpg", cityName: "Adıyaman" },
    { id: 3, cityPhoto: "https://upload.wikimedia.org/wikipedia/commons/1/15/Afyonkarahisar_Kalesi_9.jpg", cityName: "Afyonkarahisar" },
    { id: 4, cityPhoto: "https://www.manzara.gen.tr/w1/ishak-pasa-sarayi3.jpg", cityName: "Ağrı" },
    { id: 5, cityPhoto: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d7/0c/9c/caption.jpg?w=1200&h=-1&s=1", cityName: "Aksaray" },
    { id: 6, cityPhoto: "https://i3.posta.com.tr/i/posta/75/0x410/6206fa3045d2a0c0140a054c.jpg", cityName: "Amasya" },
    { id: 7, cityPhoto: "https://cdn.otelleri.net/landing/ankara/gezi-rehberi/anitkabir-2095-f6.jpg", cityName: "Ankara" },
    { id: 8, cityPhoto: "https://antalya.com.tr/Uploaded/listing/1-426/antalya_alanya_kalesi.jpg", cityName: "Antalya" },
    { id: 9, cityPhoto: "https://i0.wp.com/trendyer.com/wp-content/uploads/2022/10/8-Altas-Ur-Kalesi-Ardahan-Gezilecek-Yerler-Trendyer.jpg?resize=1194%2C795&ssl=1", cityName: "Ardahan" },
    { id: 10, cityPhoto: "https://www.gezilesiyer.com/wp-content/uploads/2017/09/cifte-kopru-artvin.jpg", cityName: "Artvin" },
    { id: 11, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2019/08/Aphrodisias-Antik-Kenti.jpg", cityName: "Aydın" },
    { id: 12, cityPhoto: "https://blog.obilet.com/wp-content/uploads/2018/08/ayval%C4%B1k.jpg", cityName: "Balıkesir" },
    { id: 13, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2021/04/lg8.jpg", cityName: "Bartın" },
    { id: 14, cityPhoto: "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/hasankeyf-oren-yeri-41462.webp", cityName: "Batman" },
    { id: 15, cityPhoto: "https://www.bayburt.net/uploads/images/2022/11/image_750x_637c24502501c.jpg", cityName: "Bayburt" },
    { id: 16, cityPhoto: "https://icdn.tgrthaber.com.tr/images/haberler/2020_08/buyuk/bilecik-gezi-rehberi-bilecik-te-gezilecek-yerler-1597854346.jpg", cityName: "Bilecik" },
    { id: 17, cityPhoto: "https://www.gezilesiyer.com/wp-content/uploads/2018/11/4.Yuzen-Adalar-Tabiat-Aniti.jpg", cityName: "Bingöl" },
    { id: 18, cityPhoto: "https://blog.obilet.com/wp-content/uploads/2019/07/shutterstock_1258005976.jpg", cityName: "Bitlis" },
    { id: 19, cityPhoto: "https://images.gezinomi.com/fit-in/640x480/filters:quality(100)/filters:format(webp)/assets/blog/bolu-yedigoller_1813382674-8.07.2021101115.jpg", cityName: "Bolu" },
    { id: 20, cityPhoto: "https://www.bizevdeyokuz.com/wp-content/uploads/Salda-Golu-7.jpg", cityName: "Burdur" },
    { id: 21, cityPhoto: "https://gezilinki.com/wp-content/uploads/2022/07/1-4-780x470.jpg", cityName: "Bursa" },
    { id: 22, cityPhoto: "https://www.gezilesiyer.com/wp-content/uploads/2018/07/canakkale-gezilecek-yerler-sehitlik-04.jpg", cityName: "Çanakkale" },
    { id: 23, cityPhoto: "https://blog.entatil.com/wp-content/uploads/2022/12/Cankiri-Gezilecek-Yerler.webp", cityName: "Çankırı" },
    { id: 24, cityPhoto: "https://res.cloudinary.com/turna/images/f_jpg,q_auto:low/v1650931061/alacahoyuk_corumda_gezilecek_tarihi_yerler_q4vjkt/alacahoyuk_corumda_gezilecek_tarihi_yerler_q4vjkt.jpg?_i=AA", cityName: "Çorum" },
    { id: 25, cityPhoto: "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2020/25/denizlide_gezilecek_yerler_2020_guncel_gezi_rehberi_1592307616_2052.jpg", cityName: "Denizli" },
    { id: 26, cityPhoto: "https://blog.obilet.com/wp-content/uploads/2018/03/diyarbak%C4%B1rda-gezilecek-yerler.jpg", cityName: "Diyarbakır" },
    { id: 27, cityPhoto: "https://blog.biletbayi.com/wp-content/uploads/2020/03/efteni-golu-scaled.jpg", cityName: "Düzce" },
    { id: 28, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2018/12/Meric-Koprusu.jpg", cityName: "Edirne" },
    { id: 29, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2021/04/elazigda-gezilecek-yerler-14.jpg", cityName: "Elazığ" },
    { id: 30, cityPhoto: "https://cdnp.flypgs.com/files/Sehirler-long-tail/Erzincan/erzincan-girlevik-selalesi.jpg", cityName: "Erzincan" },
    { id: 31, cityPhoto: "https://seyahatdergisi.com/wp-content/uploads/2016/11/erzurum-gezilecek-yerler.jpg", cityName: "Erzurum" },
    { id: 32, cityPhoto: "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/sazova-park-20712.webp", cityName: "Eskişehir" },
    { id: 33, cityPhoto: "https://blog.obilet.com/wp-content/uploads/2018/02/Gaziantepte-Gezilecek-Yerler-Rehberi.jpg", cityName: "Gaziantep" },
    { id: 34, cityPhoto: "https://i0.wp.com/trendyer.com/wp-content/uploads/2022/10/7.-Mavigo%CC%88l-Kuzalan-S%CC%A7elalesi.jpg?resize=1024%2C576&ssl=1", cityName: "Giresun" },
    { id: 35, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2021/04/gumushanede-gezilecek-yerler-imera-manastiri-olucak-koyu-768x559.jpg", cityName: "Gümüşhane" },
    { id: 36, cityPhoto: "https://staticb.yolcu360.com/blog/wp-content/uploads/2019/09/12164800/hakkari-ta%C5%9F-k%C3%B6pr%C3%BC-2.jpg", cityName: "Hakkari" },
    { id: 37, cityPhoto: "https://cdnp.flypgs.com/files/Sehirler-long-tail/Hatay/hatay-magara.jpg", cityName: "Hatay" },
    { id: 38, cityPhoto: "https://www.nenerede.com.tr/wp-content/uploads/2017/05/Meteor-%C3%87ukuru-I%C4%9Fd%C4%B1r2-848x566.jpg", cityName: "Iğdır" },
    { id: 39, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2021/03/ispartada-gezilecek-yerler-egridir-golu-1-768x559.jpg", cityName: "Isparta" },
    { id: 40, cityPhoto: "https://web-assets.bcg.com/33/27/5f1dffb148eca51da46706bf6da9/bcg-istanbul-office.jpg", cityName: "İstanbul" },
    { id: 41, cityPhoto: "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/efes-antik-kenti-34384.webp", cityName: "İzmir" },
    { id: 42, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2021/04/kahramanmarasta-gezilecek-yerler-ceyhan-koprusu-taskopru.jpg", cityName: "Kahramanmaraş" },
    { id: 43, cityPhoto: "https://www.gezipedia.net/uploads/posts/2020-03/1584607693_karabuk-gezilecek-yerler.jpg", cityName: "Karabük" },
    { id: 44, cityPhoto: "https://gezicini.com/wp-content/uploads/2019/08/taskaletahilambari1.jpg", cityName: "Karaman" },
    { id: 45, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2019/01/karsta-gezilecek-yerler-ani-harabeleri-2.jpg", cityName: "Kars" },
    { id: 46, cityPhoto: "https://cdn.otelleri.net/landing/kastamonu/gezi-rehberi/ilica-selalesi-3024-0c.jpg", cityName: "Kastamonu" },
    { id: 47, cityPhoto: "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/kapuzbasi-selaleleri-39051.webp", cityName: "Kayseri" },
    { id: 48, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2021/05/kirikkalede-gezilecek-yerler-5.jpg", cityName: "Kırıkkale" },
    { id: 49, cityPhoto: "https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-kirklareli-nasil-gidilir-gorsel-696x462.jpg", cityName: "Kırklareli" },
    { id: 50, cityPhoto: "https://gezimanya.com/sites/default/files/styles/800x600_/public/gezilecek-yerler/2019-12/dsc4868-copy.jpg", cityName: "Kırşehir" },
    { id: 51, cityPhoto: "https://img-s1.onedio.com/id-613f5a7449c0f8c05c238a3e/rev-0/w-1200/h-750/f-jpg/s-e82e0a6a72d46586e4e1506857fdab6515ac1a51.jpg", cityName: "Kilis" },
    { id: 52, cityPhoto: "https://www.bizevdeyokuz.com/wp-content/uploads/karaaslan-alabalik-tesisleri.jpg", cityName: "Kocaeli" },
    { id: 53, cityPhoto: "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/konya-mevlana-muzesi-37465.webp", cityName: "Konya" },
    { id: 54, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2019/01/kutahya-gezilecek-yerler-3-aizonai-antik-kenti-zeus-tapinagi.jpg", cityName: "Kütahya" },
    { id: 55, cityPhoto: "https://img-s1.onedio.com/id-61630253c2f1c4254dea3513/rev-0/w-635/f-jpg/s-90a3b023d806e452c916263231196c5b4211f62e.jpg", cityName: "Malatya" },
    { id: 56, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2021/05/manisada-gezilecek-yerler-sardes-artemis-tapinak.jpg", cityName: "Manisa" },
    { id: 57, cityPhoto: "https://gezilmesigerekenyerler.com/wp-content/uploads/2022/04/Mardin-Evleri.jpg", cityName: "Mardin" },
    { id: 58, cityPhoto: "https://www.bizevdeyokuz.com/wp-content/uploads/mersin-kizkalesi-1-1155x675.jpg", cityName: "Mersin" },
    { id: 59, cityPhoto: "https://imaj.emlakjet.com//resize/730/730/Haberler_Unicrow/1657703483377.jpg", cityName: "Mugla" },
    { id: 60, cityPhoto: "https://blog.biletbayi.com/wp-content/uploads/2020/01/mus-kopru-scaled.jpg", cityName: "Muş" },
    { id: 61, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2018/11/nevsehirde-gezilecek-yerler-pasabag-peribacalari-1.jpg", cityName: "Nevşehir" },
    { id: 62, cityPhoto: "https://www.birucak.com/assets/Dosyalar/Resimler/09.05.2017/Buyuk/nigde-de-gezilecek-yerler.jpg", cityName: "Niğde" },
    { id: 63, cityPhoto: "https://www.gezipedia.net/uploads/posts/2020-03/1584002386_ordu-gezilecek-yerler.jpg", cityName: "Ordu" },
    { id: 64, cityPhoto: "https://trendyer.com/wp-content/uploads/2022/10/1-Osmaniye-Masal-Park-Osmaniye-Gezilecek-Yerler-Trendyer.jpg", cityName: "Osmaniye" },
    { id: 65, cityPhoto: "https://www.gezilesiyer.com/wp-content/uploads/2020/01/Kible-dagi-camii-2.jpg", cityName: "Rize" },
    { id: 66, cityPhoto: "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/sakarya-nehri-38415.webp", cityName: "Sakarya" },
    { id: 67, cityPhoto: "https://www.etstur.com/letsgo/wp-content/uploads/2018/11/sahinkaya-kanyonu-samsun-gezilecek-yerler.jpg", cityName: "Samsun" },
    { id: 68, cityPhoto: "https://www.yakintatilyerleri.com/img/siirt-gezilecek-yerler.jpg", cityName: "Siirt" },
    { id: 69, cityPhoto: "https://www.gezilesiyer.com/wp-content/uploads/2017/03/sinop-erfelek-selalesi.jpg", cityName: "Sinop" },
    { id: 70, cityPhoto: "https://img-s1.onedio.com/id-53875afb1e61f2090e1151dd/rev-0/w-620/f-jpg/s-03a2a81fba8249ff74fc071396ec3347fb1fc66c.jpg", cityName: "Sivas" },
    { id: 71, cityPhoto: "https://blog.biletbayi.com/wp-content/uploads/2020/07/harran-evleri-scaled.jpg", cityName: "Şanlıurfa" },
    { id: 72, cityPhoto: "https://blog.biletbayi.com/wp-content/uploads/2020/07/cudi-dagi-scaled.jpg", cityName: "Sirnak" },
    { id: 73, cityPhoto: "https://www.nenerede.com.tr/wp-content/uploads/2017/09/Hora-Feneri2-848x566.png", cityName: "Tekirdağ" },
    { id: 74, cityPhoto: "https://cdn.otelleri.net/landing/tokat/gezi-rehberi/kaz-golu-3385-07.jpg", cityName: "Tokat" },
    { id: 75, cityPhoto: "https://www.birhayalinpesinde.com/wp-content/uploads/2017/08/s%C3%BCmela-manas%C4%B1t%C4%B1r%C4%B1-trabzon-gezilecek-yerler.jpg", cityName: "Trabzon" },
    { id: 76, cityPhoto: "https://cdn.otelleri.net/landing/tunceli/gezi-rehberi/pertek-kalesi-3483-2d.jpg", cityName: "Tunceli" },
    { id: 77, cityPhoto: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/12/a6/cb/56/kopru-cok-etkiletyici.jpg", cityName: "Uşak" },
    { id: 78, cityPhoto: "https://cdnp.flypgs.com/files/Sehirler-long-tail/Van/van-kale.jpg", cityName: "Van" },
    { id: 79, cityPhoto: "https://res.cloudinary.com/turna/images/v1632826710/yalova-gezilecek-yerler/yalova-gezilecek-yerler-jpg?_i=AA", cityName: "Yalova" },
    { id: 80, cityPhoto: "https://www.biletara.com/blog/wp-content/uploads/2021/03/yozgat.jpg", cityName: "Yozgat" },
    { id: 81, cityPhoto: "https://blog.biletbayi.com/wp-content/uploads/2019/12/zonguldak-turkiye-scaled.jpg", cityName: "Zonguldak" }
  ]

  const [weatherData, setWeatherData] = useState(null);
  const [selectedCityPhotoLink, setSelectedCityPhotoLink] = useState(cityData[39].cityPhoto);
  const [cityName, setCityName] = useState('İstanbul');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  const fetchWeatherData = async (city) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&lang=tr`);
      setWeatherData(response.data);
      setCityName(city)
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const setSelectedCityPhoto = (selectedCity) => {
    cityData.forEach(city => {
      if (city.cityName === selectedCity) {
        setSelectedCityPhotoLink(city.cityPhoto)
      }
    })
  };


  useEffect(() => {
    fetchWeatherData('İstanbul');
  }, []);

  return (
      <WeatherContext.Provider value={{ cityData, cityName, selectedCityPhotoLink, setSelectedCityPhoto, weatherData, loading, error, fetchWeatherData }}>
        {children}
      </WeatherContext.Provider>

  );
};

export default WeatherContextProvider;
