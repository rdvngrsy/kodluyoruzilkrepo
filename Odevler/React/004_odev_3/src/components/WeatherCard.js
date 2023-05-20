import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherCard = () => {
  const { weatherData, loading, error } = useContext(WeatherContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Select a city to get the weather information</div>;
  }

  const { location, current, forecast } = weatherData;

  //************************************************** Tarihi Local olarak düzenleme. *************************************/ 

  /*****Aşağıda tarih kısmında pratik olarak yaptım.********/
  // const dateStr = forecast.forecastday.map((day) => {
  //   return day.date
  // })

  // console.log(dateStr);

  // const date = dateStr.map(day => {
  //   const localDate = new Date(day)
  //   return localDate.toLocaleDateString("tr-TR", {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "numeric",
  //   });
  // })

  // console.log(date);

  //************************************************** Tarihi Local olarak düzenleme. *************************************/ 


  return (
    <>
      <div className=''>
        <h2 className='grid place-items-center text-white font-bold text-xl sm:text-3xl'>{location.name} İli Hava Tahmini</h2>

        <div className='grid grid-cols-1 gap-7 mt-4'>
          <div className=' grid grid-cols-1 bg-slate-300 rounded-3xl '>
            <div className='bg-slate-500 text-center p-3 font-semibold sm:text-2xl rounded-3xl '><p>Anlık Durum</p></div>
            <div className=' grid grid-cols-1 place-items-center sm:text-lg  mb-3'>
              <span>Sıcaklık: {current.temp_c}°C</span>
              <span>Nem: %{current.humidity}</span>
              <img src={current.condition.icon} alt={current.condition.text} />
              <span>{current.condition.text}</span>
            </div>
          </div>


          <div className='grid grid-cols-1 gap-4 bg-slate-300 rounded-3xl'>
            <div className='bg-slate-500 text-center p-3 font-semibold rounded-3xl sm:text-2xl'><p>3 Günlük Hava Tahmini</p></div>
            <div className='grid grid-cols-3 gap-3 sm:text-lg'>
              {
                forecast.forecastday.map((day) => (
                  <div className='grid grid-cols-1 text-center bg-slate-400 rounded-3xl' key={day.date}>
                    <div className='bg-slate-500 rounded-t-3xl '>
                      <p>
                        {new Date(day.date).toLocaleDateString("tr-TR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </p>
                      <p>
                        {new Date(day.date).toLocaleDateString("tr-TR", {
                          weekday: 'long',
                        })}
                      </p>
                    </div>
                    <div className='grid place-items-center mb-3'>
                      <img src={day.day.condition.icon} alt={day.day.condition.text} />
                      <p>{day.day.condition.text === "Bölgesel düzensiz yağmur yağışlı" ? "Düzensiz Yağış" : day.day.condition.text}</p>
                      <p>{day.day.maxtemp_c}°C / {day.day.mintemp_c}°C</p>
                      <p>Ort. Nem: %{day.day.avghumidity}</p>
                    </div>
                  </div>
                ))}

            </div>
          </div>


        </div>
      </div>

    </>
  );
};

export default WeatherCard;
