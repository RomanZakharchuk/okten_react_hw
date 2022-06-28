import './Users.css';

export default function  Users({item, showPosts}) {
    return (
        <div className='user_wrap'>
            <h2>{item.id}</h2>
            <h2>Name: {item.name}</h2>
            <h3>User Name: {item.username}</h3>
            <p>Email: {item.email}</p>
            <button onClick={() => showPosts(item.id)}>Show posts</button>
        </div>
    )
}