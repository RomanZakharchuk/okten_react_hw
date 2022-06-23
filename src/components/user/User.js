import './User.css';

export default function  User({item}) {
    return (
        <div className='wrap_about'>
            <p>Name: {item.name}</p>
            <p>Sure name: {item.username}</p>
            <p>Email: {item.email}</p>
            <p>Street: {item.address.street}</p>
            <p>{item.address.suite}</p>
            <p>City: {item.address.city}</p>
        </div>
    )
}