import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const CityPhotoCard = () => {
    const { cityName, selectedCityPhotoLink } = useContext(WeatherContext);

    return (
        <>
            {
                <div className="relative">
                    <img className='relative object-cover h-[17rem] w-[19rem] lg:h-[25rem] lg:w-[19rem] xl:h-[30rem] xl:w-[25rem] rounded-3xl shadow-xl shadow-sky-500' src={selectedCityPhotoLink} alt="" />
                    <div className="absolute inset-0 flex justify-center">
                        <div className="absolute inset-0 bg-black rounded-3xl opacity-50 "></div>
                        <span className="text-white text-3xl lg:text-4xl font-bold relative mt-5">{cityName}</span>
                    </div>
                </div>
            }

        </>
    );
};

export default CityPhotoCard;
