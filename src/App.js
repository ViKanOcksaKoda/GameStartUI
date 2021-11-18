import Navigationbar from './components/navbar/Navigationbar';
import CarouselSlider from './components/carousel/CarouselSlider';
import GamePage from './components/gamepage/GamePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <CarouselSlider/>
      <GamePage/>
    </div>
  );
}

export default App;
