import './App.css';
import NavigationBar from './navbar/navbar';
import "@fontsource/barlow-condensed";
import "@fontsource/bellefair";
import Home from './home/home';
import Destination from './destination/destination';
import Crew from './crew/crew';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/crew' element={<Crew/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
