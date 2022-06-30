import {useForm} from "react-hook-form";

import './FormComments.css';
import {getComments} from "../../services";

const FormComments = () => {

    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: '',
            email: '',
            body: ''
        }
    });

    const submit = (obj) => {
        getComments(obj).then(result => console.log(result));
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit(submit)}>
                <input
                    type="text"
                    {...register('name')}
                />
                <input
                    type="email"
                    {...register('email')}
                />
                <input
                    type="text"
                    {...register('body')}
                />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default FormComments;