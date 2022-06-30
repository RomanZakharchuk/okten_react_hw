import {useForm} from "react-hook-form";

import './FormUsers.css';
import {getUsers} from "../../services";

const FormUsers = () => {

    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: '',
            username: '',
            email: ''
        }
    });

    const submit = (obj) => {
        getUsers(obj).then(result => console.log(result));
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit(submit)}>
                <input
                    type="text"
                    {...register('name')}
                />
                <input
                    type="text"
                    {...register('username')}
                />
                <input
                    type="email"
                    {...register('email')}
                />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default FormUsers;