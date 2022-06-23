import './App.css';
import Launches from "./components/launches";
import {useEffect, useState} from "react";
import {getSpaceX} from "./services/spacexService";

function App() {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        getSpaceX().then(value => setLaunches(value));
    }, []);

  return (
    <div className="App">
        {launches.filter(year => year.launch_year !== '2020').map((item, index) => <Launches
            key={index}
            launch={item}
        />)}
    </div>
  );
}

export default App;
