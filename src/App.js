import './App.css';
import {CarForm, Cars} from "./components";

const App = () => {
    return (
        <div className="App">
            <h1>This is our Form</h1>
            <div className='content'>
                <CarForm/>
                <Cars/>
            </div>
        </div>
    );
}

export {App};
