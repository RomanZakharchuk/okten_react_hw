import './App.css';
import FormUsers from "./components/form-users";
import FormComments from "./components/form-comments";

const App = () => {
    return (
        <div className="App">
            Add user:
            <FormUsers/>
            Add comment:
            <FormComments/>
        </div>
    );
}

export default App;
