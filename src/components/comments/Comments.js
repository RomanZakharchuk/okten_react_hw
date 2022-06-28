export default function Comments({item}) {
    return (
        <div>
            <p>{item.id}: {item.body}</p>
        </div>
    )
}