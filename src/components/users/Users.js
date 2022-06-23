import './Users.css';

export default function  Users({item, showInfo}) {
    return (
        <div className='wrap_user'>
            <h2>{item.id}</h2>
            <p>{item.name}</p>
            <button onClick={() => showInfo(item)}>Show info</button>
        </div>
    )
}