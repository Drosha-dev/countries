import { useState, useEffect } from "react";

import getWeather from "../src/services/weather";


const Weather = ({ name, lat,lon}) => {
    const [weather,setWeather]= useState(null);


  useEffect(() => {
    getWeather(lat, lon).then((weather) => {
      setWeather(weather);
    });
  }, [lat, lon]);



return ()