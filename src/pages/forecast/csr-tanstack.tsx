import React from "react";
import { getWeather } from "../api/weather";
import styles from "./forecast.module.css";
import Loading from "./components/Loading";
import { useQuery } from "@tanstack/react-query";

export default function CsrTanstack() {
  const {
    data: weather,
    isLoading: isLoadingWeather,
    isError: isErrorWeather,
  } = useQuery([getWeather.name], getWeather);

  return (
    <div>
      <h1 className={styles.mainTitle}>天気予報(CSR)</h1>
      {isLoadingWeather ? (
        <Loading />
      ) : isErrorWeather ? (
        <div>エラー</div>
      ) : (
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
      )}
    </div>
  );
}
