import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { Weather, getWeather } from "../api/weather";
import styles from "./forecast.module.css";

interface SsrProps {
  weather: Weather;
}

export const getServerSideProps: GetServerSideProps<SsrProps> = async () => {
  const weather = await getWeather();

  return {
    props: {
      weather,
    },
  };
};

export default function Ssr({ weather }: SsrProps) {
  return (
    <div>
      <h1 className={styles.mainTitle}>天気予報(SSR)</h1>
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
  );
}
