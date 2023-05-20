import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const CitySelector = () => {
  var [city, setCity] = useState('');
  const { fetchWeatherData,setSelectedCityPhoto, cityData } = useContext(WeatherContext);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCitySubmit = (event) => {
    event.preventDefault();
    if (city) {
      setSelectedCityPhoto(city);
      fetchWeatherData(city);
    }
  };


  return (
      
      <>
      
          <form onSubmit={handleCitySubmit} className='flex justify-center items-center gap-2 mb-3'>

            <div>
              <select className='h-9 lg:h-10 lg:text-xl rounded-md ' id="city" value={city} onChange={handleCityChange} >
                <option value="">Şehir seçiniz</option>
                {cityData.map((city) => (
                  <option key={city.id} value={city.cityName}>
                    {`${cityData.indexOf(city) + 1}- ${city.cityName}`}
                  </option>
                ))
                }
              </select>
            </div>

            <div>
              <button className='btn' type="submit">Sonuç</button>
            </div>

          </form>
      </>
  );
};

export default CitySelector;
