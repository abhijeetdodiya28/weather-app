
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./searchbox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function ShowCard({ info }) {

    const ANT_IMG = "https://images.unsplash.com/photo-1454789476662-53eb23ba5907?q=80&w=752&auto=format&fit=crop";

    const COLD_URL = "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=ID6SPra-gNgAYY7F9p_7_eVLgoxZJeD3N95Nu3LOY9I=";
    const HOT_URL = "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.jpg?s=612x612&w=is&k=20&c=3brCjiKwWlFr6aMTjIiWTLMhjNdlr15Lcg8ueEYi-d0=";
    const RAIN_URL = "https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.webp?a=1&b=1&s=612x612&w=0&k=20&c=9XJPT7vqYSb_M4IQLXITJiZ9k2c5Lo31C_Raw2p0iPc=";
    return (
        <div className='Searchbox'>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp
                                    > 30 ?
                                    HOT_URL
                                    : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" >
                            {info.city}
                            {
                                info.humidity > 80
                                    ? <ThunderstormIcon />
                                    : info.temp
                                        > 30 ?
                                        <WhatshotIcon />
                                        : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}%</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>
                                The weather is <i>{info.weather}</i> and it feels like {info.feelslike}&deg;C.
                            </p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>

        </div>

    );

}