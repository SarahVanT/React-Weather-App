import './App.css';
import Search from "./Search";
import Footer from "./Footer";

export default function Weather() {
  // let weatherData = {
  //   city: "New York",
  //   temperature: 19,
  //   date: "Tuesday 10:00",
  //   description: "Cloudy",
  //   imgUrl: "http://openweathermap.org/img/wn/50d@2x.png",
  //   humidity: 80,
  //   wind: 10,
  // };

  return (
    <div className='App container'>
      <div className='weather-app-wrapper'>
        <div className='weather-app'>
          <Search />
          
        </div>
        <Footer />
      </div>
    </div>
  );
}
