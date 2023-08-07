import { GetStaticProps } from "next";
import { Weather, getWeather } from "../api/weather";
import styles from "./forecast.module.css";

export interface SsgProps {
  weather: Weather;
}

export const getStaticProps: GetStaticProps<SsgProps> = async () => {
  const weather = await getWeather();

  return { props: { weather } };
};

export default function Ssg({ weather }: SsgProps) {
  return (
    <div>
      <h1 className={styles.mainTitle}>天気予報(SSG)</h1>
      <h2 className={styles.subTitle}>{weather.title}</h2>

      <div className={styles.forecastContents}>
        {weather.forecasts.map((forecast) => (
          <div className={styles.forecastContent} key={forecast.date}>
            <p className={styles.date}>{forecast.date}</p>
            <p className={styles.telop}>{forecast.telop}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
