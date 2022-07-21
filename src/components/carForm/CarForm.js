import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";

const CarForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm();
    const {carForUpdate, errors} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])

    const submit = async (data) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id: carForUpdate.id, car: data}))
        } else {
            await dispatch(carActions.create({car: data}))
        }
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'Update' : 'Create'}</button>
            {errors && <div>{errors.model}</div> }
            {errors && <div>{errors.price}</div> }
            {errors && <div>{errors.year}</div> }
        </form>
    );
};

export {CarForm};