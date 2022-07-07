import {useEffect, useState} from "react";

import './Todos.css';
import ApiService from "../../services";
import TodoComponent from "../../componets/todoComponent";

const Todos = () => {
    const apiService = new ApiService('todos');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setTodos(value));
    }, []);

    return (
        <div>
            <div>
                <h2>Our todos:</h2>
            </div>
            <div>
                {todos.map(todo => <TodoComponent
                    key={todo.id}
                    item={todo}
                />)}
            </div>
        </div>
    )
}

export default Todos;