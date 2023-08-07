export interface Weather {
  copyright: WeatherCopyright;
  description: WeatherDescription;
  forecasts: WeatherForecast[];
  link: string;
  location: WeatherLocation;
  publicTime: string;
  publicTimeFormatted: string;
  publishingOffice: string;
  title: string;
}

export interface WeatherCopyright {
  image: WeatherCopyrightImage;
  link: string;
  title: string;
}

export interface WeatherCopyrightImage {
  height: number;
  link: string;
  title: string;
  url: string;
  width: number;
}

export interface WeatherDescription {
  bodyText: string;
  headlineText: string;
  publicTime: string;
  publicTimeFormatted: string;
  text: string;
}

export interface WeatherLocation {
  area: string;
  prefecture: string;
  district: string;
  city: string;
}

export interface WeatherForecast {
  chanceOfRain: string;
  date: string;
  dateLabel: string;
  detail: WeatherForecastDetail;
  image: WeatherForecastImage;
  telop: string;
  temperature: WeatherForecastTemperature;
}

export interface WeatherForecastDetail {
  weather: string;
  wind: string;
  wave: string;
}

export interface WeatherForecastImage {
  title: string;
  url: string;
  width: number;
  height: number;
}

export interface WeatherForecastTemperature {
  max: WeatherForecastTemperatureValue;
  min: WeatherForecastTemperatureValue;
}

export interface WeatherForecastTemperatureValue {
  celsius: string | null;
  fahrenheit: string | null;
}

// 型推論で戻り値を指定する方法（推奨）
export async function getWeather() {
  const response = await fetch(
    "https://weather.tsukumijima.net/api/forecast/city/040010"
  );

  const data: Weather = await response.json();

  // 戻り値＝return
  return data;
}
