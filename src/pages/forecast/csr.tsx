import React, { useState, useEffect } from "react";
import { Weather, getWeather } from "../api/weather";
import styles from "./forecast.module.css";
import Loading from "./components/Loading";

export default function Csr() {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    getWeather().then((data) => {
      setWeather(data);
    });
  }, []);

  return (
    <div>
      <h1 className={styles.mainTitle}>天気予報(CSR)</h1>
      {weather ? (
        <div>
          <h2 className={styles.subTitle}>{weather.title}</h2>

          <div className={styles.forecastContents}>
            {weather.forecasts.map((forecast) => (
              <div key={forecast.date} className={styles.forecastContent}>
                <p className={styles.date}>{forecast.date}</p>
                <p className={styles.telop}>{forecast.telop}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
