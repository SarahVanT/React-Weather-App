import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather defaultCity="Dayton"/>
        <footer>
          This project was created by <a href='https://joyful-tiramisu-ce3d71.netlify.app/' target="_blank" rel="noreferrer"> Sarah VanTilburg</a> and is <a
          href="https://github.com/SarahVanT/React-Weather-App"
          target="_blank"
          rel="noreferrer"
          >open sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}
