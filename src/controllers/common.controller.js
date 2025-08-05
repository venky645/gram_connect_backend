
export const getWeatherUpdates = async(req,res)=>{
    const api_to_connect = process.env.WEATHER_API_URI
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    const daily = "temperature_2m_max,temperature_2m_min,rain_sum,wind_speed_10m_max,wind_direction_10m_dominant"
    const timezone = "auto"
    const construct_uri = `${api_to_connect}?latitude=${latitude}&longitude=${longitude}&daily=${daily}&timezone=${timezone}`
    try {
        const weather_resp = await fetch(construct_uri,{
            method : "GET"

        }).then((response) => response.json()).then((data) => data).catch((error) => {
            console.error("Error fetching weather data:", error);
        });

        if(!weather_resp) return res.status(500).json({message: "failed to fetch weather data"})
        const weather_data = {
            temperature_max: weather_resp.daily.temperature_2m_max,
            temperature_min: weather_resp.daily.temperature_2m_min,
            rain_sum: weather_resp.daily.rain_sum,
            wind_speed_max: weather_resp.daily.wind_speed_10m_max,
            wind_direction_dominant: weather_resp.daily.wind_direction_10m_dominant
        };

        return res.status(200).json({message: "Weather data fetched successfully", data: weather_data});
    }
    catch(e){
        console.error("Error in getWeatherUpdates:", e?.data || e?.message);
        return res.status(500).json({message: "Internal server error"});

    }

}