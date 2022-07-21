import {useDispatch} from "react-redux";

import css from './Car.module.css';
import {carActions} from "../../redux";

const Car = ({item}) => {
    const {id, model, price, year} = item;

    const dispatch = useDispatch();

    return (
        <div className={css.carsBlock}>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(item))}>Update Car</button>
            <button onClick={() => dispatch(carActions.del({id}))}>Delete</button>
        </div>
    )
}

export {Car};