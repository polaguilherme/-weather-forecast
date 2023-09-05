import React, { useState } from "react";
import axios from "axios";
import {
  WiThermometer,
  WiHumidity,
  WiBarometer,
  WiStrongWind,
} from "react-icons/wi";

const API_KEY = "06ea5751f949676b8c4f8bc13cd89e9c";

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
  dt: number;
  name: string;
  sys: {
    country: string;
  };
}

interface WeatherProps {
  weatherData: WeatherData | null;
}

export default function Home({ weatherData }: WeatherProps) {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt&appid=${API_KEY}`
      );
      const data: WeatherData = response.data;

      setTimeout(() => {
        setCityData(data);
        setLoading(false);
      }, 300);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
      setCityData(null);
      setLoading(false);
    }
  };

  return (
    <main className="bg-blue-100 p-4 min-h-screen">
      <div className="bg-white p-4 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Previsão do Tempo</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-2 py-1 border rounded"
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Buscar
          </button>
        </div>
        {loading ? (
          <div className="text-center">
            <p className="text-xl font-semibold">Carregando...</p>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mt-4"></div>
          </div>
        ) : cityData ? (
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Previsão do Tempo para {cityData.name}, {cityData.sys.country}
            </h2>
            <div className="flex justify-center items-center">
              <img
                src={`https://openweathermap.org/img/w/${cityData.weather[0].icon}.png`}
                alt="Weather Icon"
                className="w-20 h-20"
              />
              <p className="text-4xl font-bold">
                {cityData.main.temp.toFixed(1)}°C
              </p>
            </div>
            <p className="text-lg text-gray-600 mt-2">
              {cityData.weather[0].description}
            </p>
            <div className="flex justify-around mt-6">
              <div className="text-center">
                <WiThermometer className="text-3xl mx-auto text-yellow-500" />
                <p className="text-lg font-semibold mt-1">
                  {cityData.main.temp.toFixed(1)}°C
                </p>
                <p className="text-gray-500">Temperatura</p>
              </div>
              <div className="text-center">
                <WiHumidity className="text-3xl mx-auto text-blue-500" />
                <p className="text-lg font-semibold mt-1">
                  {cityData.main.humidity}%
                </p>
                <p className="text-gray-500">Umidade</p>
              </div>
              <div className="text-center">
                <WiBarometer className="text-3xl mx-auto text-purple-500" />
                <p className="text-lg font-semibold mt-1">
                  {cityData.main.pressure} hPa
                </p>
                <p className="text-gray-500">Pressão</p>
              </div>
              <div className="text-center">
                <WiStrongWind className="text-3xl mx-auto text-green-500" />
                <p className="text-lg font-semibold mt-1">
                  {cityData.wind.speed} m/s
                </p>
                <p className="text-gray-500">Velocidade do Vento</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              Última atualização:{" "}
              {new Date(cityData.dt * 1000).toLocaleTimeString()}
            </p>
          </div>
        ) : (
          <p className="text-lg italic text-center">
            Digite o nome da cidade e clique em "Buscar" para ver a previsão do
            tempo.
          </p>
        )}
      </div>
    </main>
  );
}
