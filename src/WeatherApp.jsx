import { useState } from "react"
import SearchBox from "./searchBox"
import ShowCard from "./showCard"

export default function Weather({}) {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    })

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <SearchBox updateInfo={updateInfo} />
            <br /><br />
            <ShowCard info={weatherInfo} />
        </div>
    )
}