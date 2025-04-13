import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchbox.css";
import { useState } from "react";
import axios from "axios";

export default function SearchBox({ updateInfo }) {

    const API = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1b91fa8d6184ac7da39225925f8a066e";

    let [city, setCity] = useState("");
    let [error, setError] = useState("");

    let hanlechange = (event) => {
        setCity(event.target.value);
        if (error) setError("");
    }

    let getWeather = async () => {

        const response = await axios.get(`${API}?q=${city}&appid=${API_KEY}&units=metric`);

        try {
            let result = {
                feels_like: response.data.main.feels_like,
                humidity: response.data.main.humidity,
                temp: response.data.main.temp,
                temp_max: response.data.main.temp_max,
                temp_min: response.data.main.temp_min,
                weather: response.data.weather[0].description,
                city: city,
            };
            return result;
        }
        catch (error) {
            throw error;
        }
    }

    let handleSubmit = async (event) => {
        event.preventDefault();

        if (city.trim() === "") {
            setError("enter the name of city");
            return;
        }

        try {
            const weather = await getWeather();
            updateInfo(weather);
            setError("");
            setCity("");
        } catch (error) {
            setError("No such place found in the APi");
        }
    }

    return (
        <div className="Searchbox">
            <form onSubmit={handleSubmit}>
                <h1>Search city for Weather </h1><br />
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={city}
                    onChange={hanlechange}
                /> <br /><br />
                <Button variant="outlined" type="submit">clik me</Button>
                {error && <p style={{ color: "Red" }}>{error}</p>}
            </form>
        </div>
    )
}