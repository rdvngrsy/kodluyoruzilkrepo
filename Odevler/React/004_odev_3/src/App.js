import React from 'react';
import WeatherContextProvider from './context/WeatherContext';
import CitySelector from './components/CitySelector';
import WeatherCard from './components/WeatherCard';
import CityPhotoCard from './components/CityPhotoCard';
import './App.css'

function App() {
  return (
    <div className='background overflow-y-auto'>

      <WeatherContextProvider>

        <div className='container grid grid-cols-1 mx-auto mt-10 lg:mt-36 rounded-3xl shadow-xl shadow-emerald-500 '>
          <div className='grid grid-cols-1 '>
            <div className="bg-slate-700 text-3xl lg:text-7xl font-bold text-center rounded-t-3xl p-5 text-white content-center grid">
              <h1 className='text-transparent bg-gradient-to-r bg-clip-text from-indigo-900 from-15% via-sky-600 via-30% to-emerald-500 to-90%'>Hava Durumu</h1>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-3 lg:grid-cols-3 content-center lg:gap-3 rounded-b-3xl bg-black p-2 '>
            <div className='grid-cols-1 lg:col-span-1 rounded-3xl bg-slate-700'>
              <div className='mx-auto mt-4 lg:mt-16 h-[17rem] w-[19rem] lg:h-[25rem] lg:w-[19rem] xl:h-[30rem] xl:w-[25rem] xl:mt-3'>
                <CityPhotoCard />
              </div>
              <div className='mt-10 lg:mt-14'>
                <CitySelector />
              </div>
            </div>

            <div className='grid-cols-1 lg:col-span-2 rounded-3xl bg-slate-700 p-3'>
              <WeatherCard />
            </div>
          </div>

        </div>
      </WeatherContextProvider>
    </div>

  );
}

export default App;
