import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../car/Car";
import {carActions} from "../../redux";

const Cars = () => {
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, []);

    return (
        <div>
            {cars.map((car, index) => <Car
                key={index}
                item={car}
            />)}
        </div>
    )
}

export {Cars};